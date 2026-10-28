import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import FlameMascot from '../components/FlameMascot'
import Layout from '../components/Layout'
import { LEARNING_PATHS, getLessonsByPath } from '../lib/content'
import { Flame, Zap, BookOpen, Trophy, Sparkles, ArrowRight, MoveRight } from 'lucide-react'

export default function Dashboard() {
  const { user, stats, progress } = useApp()
  if (!user) return null

  let recommended: { pathId: string; lessonId: string; title: string } | null = null
  for (const path of LEARNING_PATHS) {
    const lessons = getLessonsByPath(path.id)
    const next = lessons.find(l => progress[l.id]?.status !== 'completed')
    if (next) { recommended = { pathId: path.id, lessonId: next.id, title: next.title }; break }
  }

  const completedLessons = Object.values(progress).filter(p => p.status === 'completed').length
  const totalLessons = LEARNING_PATHS.reduce((a, p) => a + getLessonsByPath(p.id).length, 0)
  const ringPct = Math.min(100, Math.round((stats.dailyProgressMinutes / Math.max(1, stats.dailyGoalMinutes)) * 100))
  const radius = 46
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (ringPct / 100) * circumference

  const currentPath = LEARNING_PATHS[0]
  const pathLessons = getLessonsByPath(currentPath.id)
  const pathCompleted = pathLessons.filter(l => progress[l.id]?.status === 'completed').length

  const today = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Greeting */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow">{today}</p>
            <h1 className="text-[34px] sm:text-[44px] text-strong mt-2">Welcome back, {user.displayName}.</h1>
            <p className="text-muted text-sm mt-2">Level {stats.level} · {stats.levelName} · {completedLessons} of {totalLessons} lessons finished</p>
          </div>
          <Link to="/learn" className="btn btn-ghost self-start sm:self-auto">Browse paths <ArrowRight size={15} /></Link>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4 mb-4">
          {/* Continue learning */}
          {recommended && (
            <div className="surface-dark relative overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[220px]">
              <div className="absolute -right-8 -top-10 w-40 h-40 rounded-full" style={{ background: 'rgba(203,186,247,0.16)' }} />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">Pick up where you left off</p>
                <h2 className="text-2xl sm:text-3xl text-[#f7f5ee] mt-2">{recommended.title}</h2>
                <p className="text-sm text-white/55 mt-2 max-w-sm">
                  {getLessonsByPath(recommended.pathId).length} lessons in this path · about 5 minutes for this one.
                </p>
              </div>
              <div className="relative flex items-center gap-3 mt-6">
                <Link to={`/lesson/${recommended.lessonId}`} className="btn btn-primary">Continue lesson <MoveRight size={16} /></Link>
                <Link to={`/learn/${recommended.pathId}`} className="btn" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.22)', color: '#f7f5ee' }}>
                  Path overview
                </Link>
              </div>
            </div>
          )}

          {/* Daily ring */}
          <div className="card p-6 flex items-center gap-5">
            <div className="goal-ring shrink-0">
              <svg width="112" height="112">
                <circle cx="56" cy="56" r={radius} stroke="var(--surface-3)" strokeWidth="9" fill="none" />
                <circle
                  cx="56" cy="56" r={radius}
                  stroke="var(--accent-strong)" strokeWidth="9" fill="none"
                  strokeDasharray={circumference} strokeDashoffset={offset}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.6s ease' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="display text-2xl text-strong">{ringPct}%</span>
                <span className="text-[10px] uppercase tracking-[0.12em] text-faint">of goal</span>
              </div>
            </div>
            <div className="min-w-0">
              <p className="eyebrow">Daily goal</p>
              <div className="display text-xl text-strong mt-1">{stats.dailyProgressMinutes} / {stats.dailyGoalMinutes} min</div>
              <div className="flex items-center gap-1.5 text-sm text-muted mt-2"><Flame size={14} className="text-orange-500" /> {stats.currentStreak}-day streak</div>
              <Link to="/settings" className="text-xs text-accent font-semibold mt-2 inline-block">Adjust goal</Link>
            </div>
          </div>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { icon: Zap, label: 'Total XP', value: stats.totalXp, tint: 'var(--accent)' },
            { icon: Flame, label: 'Longest streak', value: `${stats.longestStreak}d`, tint: 'var(--pink)' },
            { icon: Trophy, label: 'Lessons done', value: completedLessons, tint: 'var(--mint)' },
            { icon: Sparkles, label: 'Verses kept', value: stats.versesMemorized, tint: 'var(--lime)' },
          ].map((s, i) => (
            <div key={i} className="tile p-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: s.tint, color: '#1a1a20' }}>
                <s.icon size={16} />
              </div>
              <div className="display text-2xl text-strong">{s.value}</div>
              <div className="text-[11px] uppercase tracking-[0.12em] text-faint mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4">
          {/* Path preview */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-1">
              <div>
                <p className="eyebrow">Current path</p>
                <h2 className="text-2xl text-strong mt-1">{currentPath.title}</h2>
              </div>
              <Link to={`/learn/${currentPath.id}`} className="text-sm font-semibold text-accent">View path →</Link>
            </div>
            <p className="text-sm text-muted mb-5">{pathCompleted} of {pathLessons.length} lessons completed</p>
            <div className="flex flex-wrap gap-3">
              {pathLessons.map(l => {
                const st = progress[l.id]?.status || 'not_started'
                const cls = st === 'completed' ? 'completed' : (l.id === recommended?.lessonId ? 'current' : 'available')
                return (
                  <Link key={l.id} to={`/lesson/${l.id}`} className={`lesson-node ${cls}`} title={l.title}>
                    {st === 'completed' ? '✓' : ''}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Daily challenge + mascot */}
          <div className="card p-6 flex items-start gap-4">
            <div className="flex-1">
              <p className="eyebrow">Daily challenge</p>
              <h2 className="text-xl text-strong mt-1">Two lessons today</h2>
              <p className="text-sm text-muted mt-2">Finish two lessons to unlock today’s discovery — a short insight from Scripture.</p>
              <div className="progress-bar mt-4"><div className="progress-fill" style={{ width: `${Math.min(100, (completedLessons % 2) * 50)}%` }} /></div>
              <Link to="/achievements" className="text-xs font-semibold text-accent mt-3 inline-block">See achievements →</Link>
            </div>
            <FlameMascot mood="idle" size={74} showBubble={false} showLabel={false} />
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-muted">
          <BookOpen size={15} className="text-accent" /> Scripture quotations from the World English Bible (public domain).
        </div>
      </div>
    </Layout>
  )
}
