import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Layout from '../components/Layout'
import { LEARNING_PATHS, getLessonsByPath } from '../lib/content'
import { BookOpen, ArrowUpRight } from 'lucide-react'

const TINTS = ['var(--accent)', 'var(--mint)', 'var(--pink)', 'var(--lime)', 'var(--amber)', 'var(--accent)', 'var(--mint)', 'var(--pink)']

export default function Learn() {
  const { progress } = useApp()
  const completed = Object.values(progress).filter(p => p.status === 'completed').length

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow">Curriculum</p>
            <h1 className="text-[36px] sm:text-[46px] text-strong mt-2">Learning paths.</h1>
            <p className="text-muted mt-2 max-w-lg">Eight guided routes through Scripture. Take them in order, or start where you are curious.</p>
          </div>
          <div className="text-sm text-muted">
            <span className="display text-2xl text-strong">{completed}</span> lessons completed
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEARNING_PATHS.map((path, i) => {
            const lessons = getLessonsByPath(path.id)
            const done = lessons.filter(l => progress[l.id]?.status === 'completed').length
            const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0
            return (
              <Link key={path.id} to={`/learn/${path.id}`} className="card card-hover p-5 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: TINTS[i % TINTS.length], color: '#1a1a20' }}>
                    <BookOpen size={19} />
                  </div>
                  <ArrowUpRight size={17} className="text-faint" />
                </div>
                <h2 className="text-xl text-strong leading-tight">{path.title}</h2>
                <p className="text-sm text-muted mt-2 leading-relaxed flex-1">{path.description}</p>
                <div className="mt-5">
                  <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
                  <div className="flex items-center justify-between mt-2 text-[11px] uppercase tracking-[0.1em] text-faint">
                    <span>{done}/{lessons.length} done</span>
                    <span>{path.difficulty}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
