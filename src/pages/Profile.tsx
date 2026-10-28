import { useApp } from '../context/AppContext'
import Layout from '../components/Layout'
import { Zap, Flame, BookOpen, Target, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Profile() {
  const { user, stats, progress } = useApp()
  if (!user) return null
  const completed = Object.values(progress).filter(p => p.status === 'completed').length

  const week = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const bars = week.map((d, i) => ({ d, h: 18 + ((i * 37 + stats.currentStreak * 11) % 72) }))

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 mb-4">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold display" style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}>
            {user.displayName[0]?.toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="text-[30px] sm:text-[36px] text-strong leading-tight">{user.displayName}</h1>
            <p className="text-sm text-muted">{user.email}</p>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="pill">Level {stats.level} · {stats.levelName}</span>
              <span className="pill">{user.knowledgeLevel}</span>
              <span className="pill">{user.preferredBibleVersion || 'WEB'}</span>
            </div>
          </div>
          <Link to="/settings" className="btn btn-ghost self-start">Settings</Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {[
            { icon: Zap, value: stats.totalXp, label: 'Total XP', tint: 'var(--accent)' },
            { icon: Flame, value: stats.currentStreak, label: 'Day streak', tint: 'var(--pink)' },
            { icon: BookOpen, value: completed, label: 'Lessons done', tint: 'var(--mint)' },
            { icon: Target, value: stats.versesMemorized, label: 'Verses kept', tint: 'var(--lime)' },
          ].map((s, i) => (
            <div key={i} className="tile p-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: s.tint, color: '#1a1a20' }}>
                <s.icon size={16} />
              </div>
              <div className="display text-2xl text-strong">{s.value}</div>
              <div className="text-[10px] uppercase tracking-[0.12em] text-faint mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="card p-6">
            <p className="eyebrow">This week</p>
            <h2 className="text-xl text-strong mt-1 mb-5">Practice rhythm</h2>
            <div className="flex items-end gap-2 h-28">
              {bars.map((b, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full rounded-t-md" style={{ height: `${b.h}%`, background: i === 6 ? 'var(--accent)' : 'var(--surface-3)' }} />
                  <span className="text-[10px] text-faint">{b.d}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-faint mt-3">Illustrative of a typical week.</p>
          </div>

          <div className="card p-6 flex flex-col">
            <p className="eyebrow">Daily goal</p>
            <h2 className="text-xl text-strong mt-1">{stats.dailyGoalMinutes} minutes a day</h2>
            <p className="text-sm text-muted mt-2 flex-1">
              Longest streak: {stats.longestStreak} days. Today: {stats.dailyProgressMinutes} of {stats.dailyGoalMinutes} minutes.
            </p>
            <div className="progress-bar mt-4 mb-4"><div className="progress-fill" style={{ width: `${Math.min(100, (stats.dailyProgressMinutes / Math.max(1, stats.dailyGoalMinutes)) * 100)}%` }} /></div>
            <Link to="/settings" className="text-sm font-semibold text-accent inline-flex items-center gap-1">Change goal <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
