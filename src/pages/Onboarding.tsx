import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Layout from '../components/Layout'
import FlameMascot from '../components/FlameMascot'
import { Check, ArrowLeft, ArrowRight } from 'lucide-react'

const LEVELS = [
  { id: 'beginner', label: 'Beginner', desc: 'New to the Bible, or starting fresh.' },
  { id: 'intermediate', label: 'Intermediate', desc: 'I know some stories and verses.' },
  { id: 'advanced', label: 'Advanced', desc: 'I study the Bible regularly.' },
]
const INTERESTS = ['The life and teachings of Jesus', 'Old Testament stories', 'New Testament', 'Bible characters', 'Christian living', 'Prayer', 'Faith and salvation', 'Biblical history', 'The teachings of the apostles', 'Bible books and chapters']
const GOALS = [
  { mins: 5, label: 'Casual', desc: 'Five minutes' },
  { mins: 10, label: 'Regular', desc: 'Ten minutes' },
  { mins: 15, label: 'Serious', desc: 'Fifteen minutes' },
  { mins: 20, label: 'Intensive', desc: 'Twenty minutes' },
]

const QUESTIONS = [
  { title: 'How familiar are you with the Bible?', hint: 'This only shapes where we start you.' },
  { title: 'What would you like to learn first?', hint: 'Pick as many as you like.' },
  { title: 'How much time each day?', hint: 'You can change this later.' },
  { title: 'Want a daily reminder?', hint: 'One quiet nudge. Nothing more.' },
]

export default function Onboarding() {
  const { user, completeOnboarding } = useApp()
  const nav = useNavigate()
  const [step, setStep] = useState(0)
  const [level, setLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner')
  const [interests, setInterests] = useState<string[]>([])
  const [goal, setGoal] = useState(10)
  const [reminders, setReminders] = useState(false)

  if (!user) { nav('/login'); return null }

  const toggleInterest = (i: string) => setInterests(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])
  const finish = () => {
    completeOnboarding(level, interests, goal, reminders)
    nav('/dashboard')
  }

  const option = (active: boolean) =>
    `w-full text-left p-4 rounded-2xl border transition ${active ? 'border-[color:var(--accent-strong)] bg-soft' : 'border-soft hover:bg-soft'}`

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
        <div className="grid lg:grid-cols-[1fr_0.55fr] gap-4 items-start">
          <div className="card p-6 sm:p-8">
            {/* steps */}
            <div className="flex items-center gap-1.5 mb-8">
              {QUESTIONS.map((_, i) => (
                <div key={i} className="h-1 flex-1 rounded-full transition-colors" style={{ background: i <= step ? 'var(--accent-strong)' : 'var(--surface-3)' }} />
              ))}
            </div>

            <p className="eyebrow">Step {step + 1} of {QUESTIONS.length}</p>
            <h1 className="text-[30px] sm:text-[36px] text-strong mt-2">{QUESTIONS[step].title}</h1>
            <p className="text-muted text-sm mt-2 mb-6">{QUESTIONS[step].hint}</p>

            {step === 0 && (
              <div className="space-y-2.5">
                {LEVELS.map(l => (
                  <button key={l.id} onClick={() => setLevel(l.id as any)} className={option(level === l.id)}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-strong">{l.label}</span>
                      {level === l.id && <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-strong)', color: '#fff' }}><Check size={12} /></span>}
                    </div>
                    <div className="text-sm text-muted mt-0.5">{l.desc}</div>
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map(i => (
                  <button key={i} onClick={() => toggleInterest(i)}
                    className={`px-3.5 py-2 rounded-full text-sm border transition ${interests.includes(i) ? 'bg-accent border-accent' : 'border-soft text-muted hover:bg-soft'}`}>{i}</button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-2 gap-2.5">
                {GOALS.map(g => (
                  <button key={g.mins} onClick={() => setGoal(g.mins)} className={option(goal === g.mins)}>
                    <div className="font-semibold text-strong">{g.label}</div>
                    <div className="text-sm text-muted mt-0.5">{g.desc}</div>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-2.5">
                <button onClick={() => setReminders(true)} className={option(reminders)}>
                  <div className="font-semibold text-strong">Yes, remind me</div>
                  <div className="text-sm text-muted mt-0.5">A short nudge at a gentle hour.</div>
                </button>
                <button onClick={() => setReminders(false)} className={option(!reminders)}>
                  <div className="font-semibold text-strong">No thanks</div>
                  <div className="text-sm text-muted mt-0.5">I will come back on my own.</div>
                </button>
              </div>
            )}

            <div className="flex items-center justify-between mt-8">
              {step > 0
                ? <button onClick={() => setStep(s => s - 1)} className="btn btn-ghost"><ArrowLeft size={15} /> Back</button>
                : <span />}
              <div className="flex items-center gap-2">
                {step < 3 && <button onClick={finish} className="text-sm text-faint hover:text-strong px-2">Skip</button>}
                {step < 3
                  ? <button onClick={() => setStep(s => s + 1)} className="btn btn-primary">Continue <ArrowRight size={15} /></button>
                  : <button onClick={finish} className="btn btn-primary">Start learning <ArrowRight size={15} /></button>}
              </div>
            </div>
          </div>

          <div className="card p-6 hidden lg:flex flex-col items-center text-center">
            <FlameMascot mood="talking" size={110} showLabel={false} message="Two minutes and we are set." />
            <p className="text-sm text-muted mt-4">You can change any of this later in Settings.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
