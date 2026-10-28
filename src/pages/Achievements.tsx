import Layout from '../components/Layout'
import { useApp } from '../context/AppContext'
import { Trophy, Sprout, Wheat, Flame, Compass, Search, Star, Brain, Lock } from 'lucide-react'

const META: Record<string, { icon: any; tint: string }> = {
  'first-steps': { icon: Sprout, tint: 'var(--mint)' },
  'daily-bread': { icon: Wheat, tint: 'var(--amber)' },
  'seven-day': { icon: Flame, tint: 'var(--pink)' },
  'explorer-10': { icon: Compass, tint: 'var(--accent)' },
  'seeker-50': { icon: Search, tint: 'var(--lime)' },
  'perfect-lesson': { icon: Star, tint: 'var(--amber)' },
  'memory-5': { icon: Brain, tint: 'var(--accent)' },
  'path-complete': { icon: Trophy, tint: 'var(--mint)' },
}

export default function Achievements() {
  const { achievements } = useApp()
  const unlocked = achievements.filter(a => a.unlocked).length

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <p className="eyebrow">Milestones</p>
            <h1 className="text-[36px] sm:text-[46px] text-strong mt-2">Achievements.</h1>
            <p className="text-muted mt-2">Quiet markers of a habit that is holding.</p>
          </div>
          <div className="pill">{unlocked} of {achievements.length} unlocked</div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {achievements.map(a => {
            const meta = META[a.id] || { icon: Trophy, tint: 'var(--accent)' }
            const Icon = meta.icon
            return (
              <div key={a.id} className={`card p-5 flex items-start gap-4 ${a.unlocked ? '' : 'opacity-55'}`}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: a.unlocked ? meta.tint : 'var(--surface-2)', color: a.unlocked ? '#1a1a20' : 'var(--text-faint)' }}>
                  {a.unlocked ? <Icon size={19} /> : <Lock size={17} />}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-strong">{a.title}</div>
                  <div className="text-sm text-muted mt-0.5 leading-relaxed">{a.description}</div>
                  {a.unlocked && (
                    <div className="text-[11px] uppercase tracking-[0.12em] text-accent mt-2">
                      Unlocked{a.unlockedAt ? ` · ${new Date(a.unlockedAt).toLocaleDateString()}` : ''}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
