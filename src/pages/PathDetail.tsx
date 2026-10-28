import { useParams, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Layout from '../components/Layout'
import { getPath, getLessonsByPath } from '../lib/content'
import { ChevronLeft, Check, Lock, ArrowRight, Star } from 'lucide-react'

export default function PathDetail() {
  const { pathId } = useParams()
  const { progress } = useApp()
  const path = getPath(pathId || '')
  if (!path) return <Layout><div className="p-8 text-center text-muted">Path not found.</div></Layout>
  const lessons = getLessonsByPath(path.id)
  const byUnit: Record<string, typeof lessons> = {}
  lessons.forEach(l => { (byUnit[l.unitId] = byUnit[l.unitId] || []).push(l) })

  const done = lessons.filter(l => progress[l.id]?.status === 'completed').length
  const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link to="/learn" className="text-sm font-semibold text-muted flex items-center gap-1 mb-6 hover:text-strong"><ChevronLeft size={15} />All paths</Link>

        <p className="eyebrow">{path.difficulty}</p>
        <h1 className="text-[36px] sm:text-[46px] text-strong mt-2">{path.title}</h1>
        <p className="text-muted mt-3 max-w-xl leading-relaxed">{path.description}</p>

        <div className="flex items-center gap-4 mt-6 mb-10">
          <div className="progress-bar flex-1 max-w-xs"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
          <span className="text-xs uppercase tracking-[0.12em] text-faint">{done} of {lessons.length} complete</span>
        </div>

        {path.units.map(unit => {
          const unitLessons = byUnit[unit.id] || []
          if (unitLessons.length === 0) return null
          return (
            <section key={unit.id} className="mb-10">
              <div className="flex items-baseline gap-3 mb-1">
                <h2 className="text-2xl text-strong">{unit.title}</h2>
              </div>
              <p className="text-sm text-muted mb-4">{unit.description}</p>

              <div className="space-y-2">
                {unitLessons.map((l, idx) => {
                  const st = progress[l.id]?.status || 'not_started'
                  const stars = progress[l.id]?.stars || 0
                  const unlocked = st === 'completed' || idx === 0 || progress[unitLessons[idx - 1]?.id]?.status === 'completed'
                  const body = (
                    <>
                      <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={st === 'completed' ? { background: 'var(--mint)', color: '#10240f' } : unlocked ? { background: 'var(--surface-2)', color: 'var(--text-muted)' } : { background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-faint)' }}>
                        {st === 'completed' ? <Check size={14} /> : idx + 1}
                      </span>
                      <span className={`flex-1 text-[15px] ${unlocked ? 'text-strong' : 'text-faint'}`}>{l.title}</span>
                      {st === 'completed' && (
                        <span className="flex items-center gap-0.5">
                          {[1, 2, 3].map(s => (
                            <Star key={s} size={11} className={s <= stars ? 'text-accent' : 'text-faint'} fill={s <= stars ? 'currentColor' : 'none'} />
                          ))}
                        </span>
                      )}
                      {unlocked ? <ArrowRight size={15} className="text-faint" /> : <Lock size={14} className="text-faint" />}
                    </>
                  )
                  return unlocked ? (
                    <Link key={l.id} to={`/lesson/${l.id}`} className="card card-hover flex items-center gap-3 px-4 py-3">
                      {body}
                    </Link>
                  ) : (
                    <div key={l.id} className="card flex items-center gap-3 px-4 py-3 opacity-60">
                      {body}
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </Layout>
  )
}
