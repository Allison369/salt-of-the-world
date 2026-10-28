import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { updateUser } from '../lib/auth'
import { useTheme } from '../lib/theme'
import Layout from '../components/Layout'
import { Sun, Moon, Check, Flame, BookOpen, Bell, Shield } from 'lucide-react'

export default function Settings() {
  const { user, setUser, stats, updateStats } = useApp()
  const { theme, setTheme } = useTheme()
  const [goal, setGoal] = useState(stats.dailyGoalMinutes)
  const [reminders, setReminders] = useState(user?.reminders ?? false)
  const [translation, setTranslation] = useState<'WEB' | 'NIV' | 'KJV' | 'GNB'>((user?.preferredBibleVersion as any) || 'WEB')
  const [saved, setSaved] = useState(false)

  if (!user) return null

  const save = () => {
    const updated = { ...user, dailyGoalMinutes: goal, reminders, preferredBibleVersion: translation }
    updateUser(updated)
    setUser(updated)
    updateStats({ dailyGoalMinutes: goal })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const Section = ({ icon: Icon, title, hint, children }: any) => (
    <div className="card p-6">
      <div className="flex items-start gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--surface-2)' }}>
          <Icon size={16} className="text-accent" />
        </div>
        <div>
          <h2 className="font-semibold text-strong">{title}</h2>
          {hint && <p className="text-xs text-muted mt-0.5">{hint}</p>}
        </div>
      </div>
      {children}
    </div>
  )

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <p className="eyebrow">Preferences</p>
        <h1 className="text-[36px] sm:text-[44px] text-strong mt-2">Settings.</h1>
        <p className="text-muted mt-2 mb-8">Small adjustments that make the habit fit your life.</p>

        <div className="space-y-4">
          <Section icon={Flame} title="Daily goal" hint="Minutes, not lessons. Be gentle with yourself.">
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 15, 20].map(m => (
                <button key={m} onClick={() => setGoal(m)}
                  className={`py-3 rounded-xl border text-sm font-semibold transition ${goal === m ? 'border-[color:var(--accent-strong)] bg-soft text-strong' : 'border-soft text-muted hover:bg-soft'}`}>
                  {m} min
                </button>
              ))}
            </div>
          </Section>

          <Section icon={BookOpen} title="Bible translation" hint="Used for verse text across lessons and memory.">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'WEB', label: 'WEB' },
                { id: 'NIV', label: 'NIV' },
                { id: 'KJV', label: 'KJV' },
                { id: 'GNB', label: 'GNB' },
              ].map(t => (
                <button key={t.id} onClick={() => setTranslation(t.id as any)}
                  className={`py-3 rounded-xl border text-sm font-semibold transition ${translation === t.id ? 'border-[color:var(--accent-strong)] bg-soft text-strong' : 'border-soft text-muted hover:bg-soft'}`}>
                  {t.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-faint mt-3">Demo content is drawn from the World English Bible (public domain).</p>
          </Section>

          <Section icon={Bell} title="Daily reminder" hint="A quiet nudge, once a day.">
            <button onClick={() => setReminders(r => !r)}
              className="w-full flex items-center justify-between p-3.5 rounded-xl border border-soft hover:bg-soft transition">
              <span className="text-sm text-strong">{reminders ? 'Reminder is on' : 'Reminder is off'}</span>
              <span className="w-11 h-6 rounded-full relative transition-colors" style={{ background: reminders ? 'var(--accent-strong)' : 'var(--surface-3)' }}>
                <span className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all" style={{ left: reminders ? '1.4rem' : '0.15rem' }} />
              </span>
            </button>
          </Section>

          <Section icon={Sun} title="Appearance" hint="Light or dark, your call.">
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setTheme('light')}
                className={`flex items-center gap-2 justify-center py-3 rounded-xl border text-sm font-semibold transition ${theme === 'light' ? 'border-[color:var(--accent-strong)] bg-soft text-strong' : 'border-soft text-muted hover:bg-soft'}`}>
                <Sun size={15} /> Light
              </button>
              <button onClick={() => setTheme('dark')}
                className={`flex items-center gap-2 justify-center py-3 rounded-xl border text-sm font-semibold transition ${theme === 'dark' ? 'border-[color:var(--accent-strong)] bg-soft text-strong' : 'border-soft text-muted hover:bg-soft'}`}>
                <Moon size={15} /> Dark
              </button>
            </div>
          </Section>

          <Section icon={Shield} title="Privacy" hint="Your progress stays on this device in the demo.">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted">Leaderboard visibility</span>
              <span className="pill">Private</span>
            </div>
          </Section>

          <button onClick={save} className="btn btn-primary w-full">
            {saved ? <><Check size={16} /> Saved</> : 'Save changes'}
          </button>
        </div>
      </div>
    </Layout>
  )
}
