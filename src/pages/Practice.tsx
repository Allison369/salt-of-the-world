import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Layout from '../components/Layout'
import FlameMascot from '../components/FlameMascot'
import { LESSONS } from '../lib/content'
import { Target, BookOpen, Check, X, ArrowRight } from 'lucide-react'

export default function Practice() {
  const { progress } = useApp()
  const missed = Object.entries(progress).filter(([_, p]) => p.status === 'completed' && p.score < 100)
  const completedLessons = Object.values(progress).filter(p => p.status === 'completed')

  const [mode, setMode] = useState<'menu' | 'quiz'>('menu')
  const [idx, setIdx] = useState(0)
  const reviewQuestions = completedLessons.flatMap(p => {
    const l = LESSONS.find(x => x.id === p.lessonId)
    return l ? l.questions.slice(0, 1) : []
  }).slice(0, 10)

  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  if (mode === 'menu') {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <p className="eyebrow">No hearts at stake</p>
          <h1 className="text-[36px] sm:text-[46px] text-strong mt-2">Practice.</h1>
          <p className="text-muted mt-2 max-w-lg">Review what you have already met. Nothing here counts against you.</p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="card p-6 flex flex-col">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: 'var(--accent)', color: '#1a1a20' }}>
                <Target size={19} />
              </div>
              <h2 className="text-xl text-strong">Five-minute review</h2>
              <p className="text-sm text-muted mt-1.5 flex-1">
                {reviewQuestions.length > 0 ? `${reviewQuestions.length} questions pulled from lessons you have finished.` : 'Finish a lesson first and questions will appear here.'}
              </p>
              <button onClick={() => { setMode('quiz'); setIdx(0) }} disabled={reviewQuestions.length === 0} className="btn btn-primary mt-5 w-full">Start review</button>
            </div>

            <div className="card p-6 flex flex-col">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: 'var(--mint)', color: '#10240f' }}>
                <BookOpen size={19} />
              </div>
              <h2 className="text-xl text-strong">Revisit weak lessons</h2>
              <p className="text-sm text-muted mt-1.5 flex-1">
                {missed.length} lesson{missed.length === 1 ? '' : 's'} with a score below 100%. A second pass is usually all it takes.
              </p>
              <Link to="/learn" className="btn btn-ghost mt-5 w-full">Browse paths <ArrowRight size={15} /></Link>
            </div>
          </div>

          <div className="card p-6 mt-4 flex items-center gap-5">
            <FlameMascot mood="encouraging" size={72} showBubble={false} showLabel={false} />
            <div>
              <h3 className="font-semibold text-strong">Repetition beats cramming.</h3>
              <p className="text-sm text-muted mt-1">Coming back to a verse three times over a week does more than an hour once.</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  const q = reviewQuestions[idx]
  const isCorrect = answers[idx] === (Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer)
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <button onClick={() => setMode('menu')} className="text-sm font-semibold text-muted mb-6 flex items-center gap-1 hover:text-strong">← Back to practice</button>
        <div className="card p-6 sm:p-7">
          <div className="flex items-center justify-between mb-4">
            <span className="eyebrow">Question {idx + 1} of {reviewQuestions.length}</span>
            <span className="pill">Practice</span>
          </div>
          <h2 className="text-2xl text-strong mb-6">{q.question}</h2>

          {(q.options || []).map((opt, i) => {
            const picked = answers[idx] === opt
            const state = checked[idx] ? (opt === q.correctAnswer ? 'good' : picked ? 'bad' : '') : picked ? 'picked' : ''
            return (
              <button key={i} onClick={() => setAnswers(a => ({ ...a, [idx]: opt }))}
                className={`w-full flex items-center gap-3 text-left p-3.5 rounded-2xl border mb-2 transition ${state === 'good' ? 'border-[color:var(--accent-strong)] bg-soft' : state === 'bad' ? 'feedback-bad' : state === 'picked' ? 'border-[color:var(--accent-strong)] bg-soft' : 'border-soft hover:bg-soft'}`}>
                <span className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[11px] font-bold" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>{String.fromCharCode(65 + i)}</span>
                <span className="text-[15px] text-strong">{opt}</span>
              </button>
            )
          })}

          <div className="flex gap-3 mt-5">
            <button onClick={() => setChecked(c => ({ ...c, [idx]: true }))} className="btn btn-primary flex-1">Check</button>
            {idx < reviewQuestions.length - 1 && <button onClick={() => setIdx(i => i + 1)} className="btn btn-ghost flex-1">Next</button>}
          </div>

          {checked[idx] && (
            <div className={`mt-5 p-4 rounded-2xl ${isCorrect ? 'feedback-good' : 'feedback-bad'}`}>
              <div className="flex items-center gap-2 font-semibold text-strong mb-1">
                {isCorrect ? <><Check size={16} className="text-accent" />Correct</> : <><X size={16} style={{ color: 'var(--danger)' }} />Not quite</>}
              </div>
              <p className="text-sm text-muted leading-relaxed">{q.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
