import { useApp } from '../context/AppContext'
import Layout from '../components/Layout'
import { LEARNING_PATHS, getLessonsByPath } from '../lib/content'
import { Shield, BookOpen, BarChart3, Plus } from 'lucide-react'

export default function Admin() {
  const { user, stats, progress } = useApp()
  if (!user) return null
  const isAdmin = user.email.toLowerCase().includes('admin') || user.email === 'admin@dailybread.app'
  if (!isAdmin) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'var(--surface-2)' }}>
            <Shield size={22} style={{ color: 'var(--danger)' }} />
          </div>
          <h1 className="text-3xl text-strong">Access denied</h1>
          <p className="text-muted mt-2">You do not have administrator permissions.</p>
          <p className="text-sm text-faint mt-4">Tip: sign up with an email containing “admin” to preview admin features.</p>
        </div>
      </Layout>
    )
  }

  const totalLessons = LEARNING_PATHS.reduce((a, p) => a + getLessonsByPath(p.id).length, 0)
  const completed = Object.values(progress).filter(p => p.status === 'completed').length

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent)', color: '#1a1a20' }}>
            <Shield size={18} />
          </div>
          <div>
            <p className="eyebrow">Internal</p>
            <h1 className="text-[30px] sm:text-[36px] text-strong">Admin dashboard</h1>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mb-4">
          {[
            { icon: BookOpen, value: LEARNING_PATHS.length, label: 'Learning paths', tint: 'var(--accent)' },
            { icon: BarChart3, value: totalLessons, label: 'Total lessons', tint: 'var(--mint)' },
            { icon: BarChart3, value: completed, label: 'Your completions', tint: 'var(--pink)' },
          ].map((s, i) => (
            <div key={i} className="tile p-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: s.tint, color: '#1a1a20' }}><s.icon size={15} /></div>
              <div className="display text-2xl text-strong">{s.value}</div>
              <div className="text-[10px] uppercase tracking-[0.12em] text-faint mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="card p-6 mb-4">
          <h2 className="text-xl text-strong mb-4">Paths and lessons</h2>
          <div className="space-y-2">
            {LEARNING_PATHS.map(path => (
              <div key={path.id} className="rounded-xl border border-soft p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-semibold text-strong">{path.title}</div>
                  <span className="text-xs text-faint">{getLessonsByPath(path.id).length} lessons · {path.difficulty}</span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {getLessonsByPath(path.id).map(l => (
                    <span key={l.id} className="text-[11px] px-2 py-1 rounded-full" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>{l.title}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="card p-6">
            <h2 className="text-xl text-strong mb-1">Content management</h2>
            <p className="text-sm text-muted mb-4">In production, admins create, edit, and publish lessons here.</p>
            <div className="grid grid-cols-2 gap-2">
              <button className="btn btn-primary"><Plus size={15} /> Path</button>
              <button className="btn btn-ghost">Add lesson</button>
              <button className="btn btn-ghost">Questions</button>
              <button className="btn btn-ghost">Reports</button>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl text-strong mb-1">Usage</h2>
            <p className="text-sm text-muted">Aggregated figures would appear here with a real backend.</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted">Total XP</span><span className="text-strong font-semibold">{stats.totalXp}</span></div>
              <div className="flex justify-between"><span className="text-muted">Current streak</span><span className="text-strong font-semibold">{stats.currentStreak} days</span></div>
              <div className="flex justify-between"><span className="text-muted">Lessons completed</span><span className="text-strong font-semibold">{completed}</span></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
