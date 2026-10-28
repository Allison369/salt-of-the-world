import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Layout from '../components/Layout'
import { getLesson } from '../lib/content'
import { ArrowLeft, Check, X, Heart, Sparkles } from 'lucide-react'
import FlameMascot from '../components/FlameMascot'

function todayStr() { return new Date().toISOString().slice(0,10) }

export default function Lesson() {
  const { lessonId } = useParams()
  const lesson = getLesson(lessonId || '')
  const { user, stats, progress, setProgress, addXp, updateStats, unlockAchievement } = useApp()

  const [phase, setPhase] = useState<'intro' | 'question' | 'result' | 'complete'>('intro')
  const [qIndex, setQIndex] = useState(0)
  const [hearts, setHearts] = useState(5)
  const [selected, setSelected] = useState<any>(null)
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState<boolean | null>(null)
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [orderState, setOrderState] = useState<string[]>([])
  const [matchState, setMatchState] = useState<Record<string, string>>({})
  const [wordPicked, setWordPicked] = useState<string | null>(null)
  const [fillText, setFillText] = useState('')

  const alreadyCompleted = !!lesson && progress[lesson.id]?.status === 'completed'
  const [mascotMood, setMascotMood] = useState<'idle' | 'talking' | 'happy' | 'encouraging' | 'excited'>('talking')
  const [mascotMsg, setMascotMsg] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (lesson) {
      setHearts(5)
      setQIndex(0)
      setPhase('intro')
      setAnswers({})
      const q = lesson.questions[0]
      if (q?.type === 'order_events') setOrderState([...(q.events || [])].sort(() => Math.random() - 0.5))
      if (q?.type === 'match_pairs') {
        const m: Record<string, string> = {}
        q.pairs?.forEach(p => { m[p.left] = '' })
        setMatchState(m)
      }
    }
  }, [lesson])

  if (!lesson) return <Layout><div className="p-8 text-center">Lesson not found.</div></Layout>
  if (!user) return null

  const questions = lesson.questions
  const currentQ = questions[qIndex]

  const resetForQuestion = (q: any) => {
    setSelected(null); setChecked(false); setCorrect(null); setFillText(''); setWordPicked(null)
    if (q?.type === 'order_events') setOrderState([...(q.events || [])].sort(() => Math.random() - 0.5))
    if (q?.type === 'match_pairs') {
      const m: Record<string, string> = {}
      q.pairs?.forEach((p: any) => { m[p.left] = '' })
      setMatchState(m)
    }
  }

  const handleCheck = () => {
    if (checked) return
    let isCorrect = false
    const q = currentQ
    if (q.type === 'multiple_choice' || q.type === 'true_false' || q.type === 'scripture_ref' || q.type === 'scenario') {
      isCorrect = selected === q.correctAnswer
    } else if (q.type === 'fill_blank') {
      isCorrect = fillText.trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase()
    } else if (q.type === 'word_bank') {
      isCorrect = wordPicked === q.correctAnswer
    } else if (q.type === 'order_events') {
      isCorrect = JSON.stringify(orderState) === JSON.stringify(q.correctAnswer)
    } else if (q.type === 'match_pairs') {
      isCorrect = q.pairs?.every((p: any) => matchState[p.left] === p.right) ?? false
    }
    setCorrect(isCorrect)
    setChecked(true)
    setAnswers(prev => ({ ...prev, [q.id]: isCorrect }))
    if (isCorrect) {
      setMascotMood('happy')
      setMascotMsg(undefined)
    } else {
      setMascotMood('encouraging')
      setMascotMsg(undefined)
      setHearts(h => Math.max(0, h - 1))
    }
  }

  const handleContinue = () => {
    if (qIndex + 1 < questions.length) {
      const next = qIndex + 1
      setQIndex(next)
      resetForQuestion(questions[next])
      setMascotMood('talking')
      setMascotMsg(undefined)
    } else {
      // complete
      finishLesson()
    }
  }

  const finishLesson = () => {
    // recompute including last
    const allAnswers = { ...answers }
    if (currentQ) allAnswers[currentQ.id] = !!correct
    const cc = Object.values(allAnswers).filter(Boolean).length
    const score = Math.round((cc / questions.length) * 100)
    const stars: 0|1|2|3 = score >= 90 ? 3 : score >= 70 ? 2 : 1
    const perfect = cc === questions.length

    const wasCompleted = progress[lesson.id]?.status === 'completed'

    setProgress(lesson.id, {
      lessonId: lesson.id,
      status: 'completed',
      score,
      stars: Math.max(stars, progress[lesson.id]?.stars || 0) as 0|1|2|3,
      attempts: (progress[lesson.id]?.attempts || 0) + 1,
      completedAt: new Date().toISOString(),
      answers: allAnswers,
    })

    if (!wasCompleted) {
      const xp = 20 + cc * 5
      addXp(xp)
      // streak
      const today = todayStr()
      if (stats.lastActivityDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10)
        const newStreak = stats.lastActivityDate === yesterday ? stats.currentStreak + 1 : 1
        updateStats({
          currentStreak: newStreak,
          longestStreak: Math.max(stats.longestStreak, newStreak),
          lastActivityDate: today,
          lessonsCompleted: stats.lessonsCompleted + 1,
          dailyProgressMinutes: stats.dailyProgressMinutes + lesson.estimatedMinutes,
          dailyRingClosed: (stats.dailyProgressMinutes + lesson.estimatedMinutes) >= stats.dailyGoalMinutes,
        })
        if (newStreak >= 7) unlockAchievement('seven-day')
      } else {
        updateStats({
          lessonsCompleted: stats.lessonsCompleted + (wasCompleted ? 0 : 1),
          dailyProgressMinutes: stats.dailyProgressMinutes + lesson.estimatedMinutes,
          dailyRingClosed: (stats.dailyProgressMinutes + lesson.estimatedMinutes) >= stats.dailyGoalMinutes,
        })
      }
        if (perfect) unlockAchievement('perfect-lesson')
    }

    setMascotMood('excited')
    setMascotMsg('You did it! Keep that fire going.')
    setPhase('complete')
  }

  const progressPct = phase === 'intro' ? 0 : phase === 'complete' ? 100 : Math.round(((qIndex) / questions.length) * 100) + (checked ? Math.round((1/questions.length)*50) : 0)

  // Daily discovery variable reward
  const discoveries = [
    { type: 'verse', text: '"The LORD is my shepherd; I shall not want." — Psalm 23:1', depth: 'short' },
    { type: 'verse', text: '"For God so loved the world, that he gave his one and only Son." — John 3:16', depth: 'short' },
    { type: 'insight', text: 'Did you know? The Bible was written over ~1,500 years by ~40 authors, yet tells one unified story of God\'s love.', depth: 'deep' },
    { type: 'verse', text: '"I can do all things through Christ, who strengthens me." — Philippians 4:13', depth: 'short' },
    { type: 'insight', text: 'In biblical times, a "talent" was a large sum of money — about 20 years of a laborer\'s wages. Jesus used it to teach faithful stewardship.', depth: 'deep' },
    { type: 'verse', text: '"Trust in the LORD with all your heart." — Proverbs 3:5', depth: 'short' },
  ]
  const discovery = discoveries[Math.floor(Math.random() * discoveries.length)]

  const optionClass = (opt: string) => {
    const isPicked = selected === opt
    const isAnswer = checked && opt === currentQ.correctAnswer
    const isWrong = checked && isPicked && opt !== currentQ.correctAnswer
    const base = 'w-full flex items-center gap-3 text-left p-3.5 rounded-2xl border transition'
    if (isWrong) return `${base} feedback-bad`
    if (isAnswer || isPicked) return `${base} bg-soft border-[color:var(--accent-strong)]`
    return `${base} border-soft hover:bg-soft`
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex items-center justify-between mb-5">
          <Link to="/dashboard" className="text-sm font-semibold text-muted flex items-center gap-1.5 hover:text-strong"><ArrowLeft size={15} />Exit</Link>
          <div className="flex items-center gap-3">
            <div className="chip !border-0" style={{ background: 'var(--surface-2)' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Heart key={i} size={13} style={{ color: i < hearts ? 'var(--danger)' : 'var(--text-faint)' }} fill={i < hearts ? 'currentColor' : 'none'} />
              ))}
            </div>
            <FlameMascot
              mood={mascotMood}
              message={mascotMsg}
              size={48}
              showBubble={phase === 'question' && checked}
              showLabel={false}
            />
          </div>
        </div>

        <div className="progress-bar mb-6"><div className="progress-fill" style={{ width: `${progressPct}%` }} /></div>

        {phase === 'intro' && (
          <div className="card p-6 sm:p-8 animate-pop">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-1">
                <p className="eyebrow">Lesson · {lesson.estimatedMinutes} min</p>
                <h1 className="text-[30px] sm:text-[38px] text-strong mt-2">{lesson.title}</h1>
                <p className="text-muted mt-3 leading-relaxed">{lesson.introduction}</p>
              </div>
              <div className="hidden sm:block shrink-0">
                <FlameMascot mood="talking" size={82} showBubble={true} showLabel={false} />
              </div>
            </div>

            <div className="tile p-5 mb-4">
              <div className="eyebrow mb-3">What you will learn</div>
              <ul className="space-y-2">
                {lesson.learningObjectives.map((o, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-strong">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--mint)' }}>
                      <Check size={12} style={{ color: '#10240f' }} />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 text-xs text-faint mb-6">
              <Sparkles size={13} /> {questions.length} questions · {lesson.scriptureReferences.join(' · ')}
            </div>

            <button onClick={() => { setPhase('question'); resetForQuestion(currentQ) }} className="btn btn-primary w-full">Start lesson</button>
          </div>
        )}

        {phase === 'question' && currentQ && (
          <div className="card p-6 sm:p-7 animate-pop">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="eyebrow">Question {qIndex + 1} of {questions.length}</span>
              {currentQ.scriptureReference && <span className="pill">{currentQ.scriptureReference}</span>}
            </div>
            <h2 className="text-2xl sm:text-[28px] text-strong mb-6 leading-snug">{currentQ.question}</h2>

            {(currentQ.type === 'multiple_choice' || currentQ.type === 'true_false' || currentQ.type === 'scripture_ref' || currentQ.type === 'scenario') && (
              <div className="space-y-2">
                {(currentQ.options || []).map((opt, i) => (
                  <button key={i} onClick={() => !checked && setSelected(opt)} className={optionClass(opt)}>
                    <span className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[11px] font-bold"
                      style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-[15px] text-strong">{opt}</span>
                    {checked && opt === currentQ.correctAnswer && <Check size={16} className="ml-auto shrink-0 text-accent" />}
                    {checked && selected === opt && opt !== currentQ.correctAnswer && <X size={16} className="ml-auto shrink-0" style={{ color: 'var(--danger)' }} />}
                  </button>
                ))}
              </div>
            )}

            {currentQ.type === 'fill_blank' && (
              <div>
                <p className="text-strong mb-3 leading-relaxed">{currentQ.blankSentence}</p>
                <input className="input" value={fillText} onChange={e => setFillText(e.target.value)} placeholder="Type the missing word" disabled={checked} />
              </div>
            )}

            {currentQ.type === 'word_bank' && (
              <div>
                <p className="text-strong mb-3">{currentQ.question}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {(currentQ.wordBank || []).map((w, i) => (
                    <button key={i} onClick={() => !checked && setWordPicked(w)}
                      className={`px-3.5 py-2 rounded-full border text-sm font-medium transition ${wordPicked === w ? 'bg-accent border-accent' : 'border-soft hover:border-[color:var(--border-strong)]'}`}>
                      {w}
                    </button>
                  ))}
                </div>
                {wordPicked && <div className="text-sm text-muted">Selected: <span className="font-semibold text-strong">{wordPicked}</span></div>}
              </div>
            )}

            {currentQ.type === 'order_events' && (
              <div className="space-y-2">
                {orderState.map((ev, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-soft rounded-xl border border-soft">
                    <span className="font-bold text-accent w-5">{i + 1}</span>
                    <span className="flex-1 text-sm text-strong">{ev}</span>
                    <button onClick={() => !checked && i > 0 && setOrderState(s => { const a = [...s]; [a[i - 1], a[i]] = [a[i], a[i - 1]]; return a })} disabled={checked} className="px-2 text-muted">↑</button>
                    <button onClick={() => !checked && i < orderState.length - 1 && setOrderState(s => { const a = [...s]; [a[i], a[i + 1]] = [a[i + 1], a[i]]; return a })} disabled={checked} className="px-2 text-muted">↓</button>
                  </div>
                ))}
              </div>
            )}

            {currentQ.type === 'match_pairs' && (
              <div className="space-y-2">
                {currentQ.pairs?.map((p: any, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="flex-1 p-2.5 bg-soft rounded-lg text-sm text-strong">{p.left}</span>
                    <span className="text-faint">→</span>
                    <select className="input" style={{ width: 'auto' }} value={matchState[p.left] || ''} onChange={e => setMatchState(s => ({ ...s, [p.left]: e.target.value }))} disabled={checked}>
                      <option value="">Select...</option>
                      {currentQ.pairs?.map((pp: any) => <option key={pp.right} value={pp.right}>{pp.right}</option>)}
                    </select>
                  </div>
                ))}
              </div>
            )}

            {checked && (
              <div className={`mt-5 p-4 rounded-2xl animate-pop ${correct ? 'feedback-good' : 'feedback-bad'}`}>
                <div className="flex items-center gap-2 font-semibold mb-1 text-strong">
                  {correct ? <><Check size={16} className="text-accent" />Correct</> : <><X size={16} style={{ color: 'var(--danger)' }} />Not quite</>}
                </div>
                <p className="text-sm text-muted leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            <div className="mt-6">
              {!checked ? (
                <button onClick={handleCheck} disabled={
                  (currentQ.type === 'multiple_choice' || currentQ.type === 'true_false' || currentQ.type === 'scripture_ref' || currentQ.type === 'scenario') ? !selected :
                    currentQ.type === 'fill_blank' ? !fillText.trim() :
                      currentQ.type === 'word_bank' ? !wordPicked :
                        false
                } className="btn btn-primary w-full">Check answer</button>
              ) : (
                <button onClick={handleContinue} className="btn btn-primary w-full">Continue</button>
              )}
            </div>
          </div>
        )}

        {phase === 'complete' && (
          <div className="card p-6 sm:p-8 text-center animate-pop">
            <div className="flex justify-center mb-2">
              <FlameMascot mood="excited" size={112} showBubble={true} showLabel={false} />
            </div>

            <p className="eyebrow mt-2">Lesson complete</p>
            <h1 className="text-[32px] sm:text-[40px] text-strong mt-2">Nicely done.</h1>
            <p className="text-muted mt-3 max-w-md mx-auto leading-relaxed">{lesson.summary}</p>

            <div className="grid grid-cols-3 gap-2.5 my-7">
              <div className="tile p-4">
                <div className="display text-2xl text-strong">{Math.round((Object.values(answers).filter(Boolean).length / questions.length) * 100)}%</div>
                <div className="text-[10px] uppercase tracking-[0.12em] text-faint mt-1">Score</div>
              </div>
              <div className="tile p-4">
                <div className="display text-2xl text-strong">{alreadyCompleted ? 0 : 20 + Object.values(answers).filter(Boolean).length * 5}</div>
                <div className="text-[10px] uppercase tracking-[0.12em] text-faint mt-1">XP earned</div>
              </div>
              <div className="tile p-4">
                <div className="display text-2xl text-strong">{hearts}</div>
                <div className="text-[10px] uppercase tracking-[0.12em] text-faint mt-1">Hearts left</div>
              </div>
            </div>

            <div className="rounded-2xl p-5 mb-6 text-left" style={{ background: 'var(--surface-2)' }}>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles size={15} className="text-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Daily discovery</span>
              </div>
              <p className="text-sm text-strong leading-relaxed">{discovery.text}</p>
              {discovery.depth === 'deep' && (
                <span className="text-xs text-accent font-semibold mt-2 inline-flex items-center gap-1"><Sparkles size={12} />Deep dive unlocked</span>
              )}
            </div>

            <div className="flex gap-3">
              <Link to="/dashboard" className="btn btn-ghost flex-1">Dashboard</Link>
              <Link to={`/learn/${lesson.pathId}`} className="btn btn-primary flex-1">Continue path</Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

