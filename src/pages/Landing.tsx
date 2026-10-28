import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import FlameMascot from '../components/FlameMascot'
import { BookOpen, Sparkles, Trophy, Flame, ArrowDown, Check, MoveRight } from 'lucide-react'

const PATHS = [
  'Bible Basics', 'The Life of Jesus', 'People of the Bible', 'Christian Living',
  'Old Testament Journey', 'New Testament Journey', 'Teachings of Jesus', 'Prayer & Growth',
]

const FEATURES = [
  { icon: BookOpen, title: 'Interactive lessons', text: 'Short, honest lessons built on real Scripture, with instant feedback that actually teaches.', tint: 'var(--mint)', ink: '#10240f' },
  { icon: Flame, title: 'Gentle daily habit', text: 'A five-minute goal, a streak that forgives, and no shame when life gets loud.', tint: 'var(--accent)', ink: '#211b33' },
  { icon: Trophy, title: 'Visible progress', text: 'Watch mastery grow across eight paths, with verses that stay with you.', tint: 'var(--pink)', ink: '#2b1024' },
]

export default function Landing() {
  return (
    <Layout>
      {/* ---------------- Hero ---------------- */}
      <section className="px-3 sm:px-6 pt-4 sm:pt-8">
        <div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] mx-auto max-w-6xl animate-rise"
          style={{ background: '#0b0b0d', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Dark copy panel */}
            <div className="relative p-7 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[430px] lg:min-h-[560px]">
              <div>
                <div className="flex items-center gap-2 mb-10">
                  <span className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    <Sparkles size={11} /> Feed your faith
                  </span>
                </div>

                <h1 className="text-[42px] leading-[0.95] sm:text-6xl lg:text-[68px] text-[#f7f5ee]">
                  Discover
                  <br />
                  the Living
                  <br />
                  <span className="italic text-[#cbbaf7]">Word.</span>
                </h1>

                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
                  Unlock wisdom from the Bible through short, interactive lessons — arranged
                  into paths and made to fit a real life.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link to="/signup" className="btn btn-primary">
                    Start learning free <MoveRight size={16} />
                  </Link>
                  <Link to="/login" className="btn" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.22)', color: '#f7f5ee' }}>
                    Sign in
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-white/40">
                  <span className="flex items-center gap-1.5"><Check size={13} className="text-[#a9d9a2]" /> No credit card</span>
                  <span className="flex items-center gap-1.5"><Check size={13} className="text-[#a9d9a2]" /> Five minutes a day</span>
                  <span className="flex items-center gap-1.5"><Check size={13} className="text-[#a9d9a2]" /> WEB, NIV, KJV, GNB</span>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/35">
                <ArrowDown size={14} /> Scroll to explore
              </div>
            </div>

            {/* Illustration panel */}
            <div className="relative m-3 sm:m-4 lg:m-4 lg:ml-0 rounded-[22px] sm:rounded-[26px] overflow-hidden min-h-[360px] lg:min-h-0"
              style={{ background: 'linear-gradient(165deg, #d6ebcd 0%, #b7e0b0 48%, #93cd90 100%)' }}>
              {/* decorative shapes */}
              <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full" style={{ background: 'rgba(230,242,131,0.75)' }} />
              <div className="absolute top-16 -left-10 w-28 h-28 rounded-full" style={{ background: 'rgba(255,255,255,0.5)' }} />
              <div className="absolute bottom-24 right-6 w-16 h-16 rounded-full" style={{ background: 'rgba(203,186,247,0.85)' }} />
              <div className="absolute top-6 right-24 w-3 h-3 rounded-full bg-[#3f5c3d]/50" />
              <div className="absolute bottom-40 left-8 w-2.5 h-2.5 rounded-full bg-[#3f5c3d]/40" />

              <div className="relative h-full flex flex-col items-center justify-center gap-4 px-6 py-10">
                <FlameMascot mood="happy" size={140} showLabel={false} message="Hi, I'm Spark." />
                <div className="text-center">
                  <p className="eyebrow" style={{ color: '#37522f' }}>Jeremiah 23:29</p>
                  <p className="mt-1 max-w-[15rem] text-[13px] leading-snug" style={{ color: '#2b422a' }}>
                    “Is not my word like fire, and like a hammer that breaks the rock in pieces?”
                  </p>
                </div>
              </div>

              {/* quote chip */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3 flex items-center justify-between gap-3"
                style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(8px)' }}>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: '#4b6b45' }}>Today’s verse</div>
                  <div className="text-[13px] font-semibold" style={{ color: '#1c2b1a' }}>“Your word is a lamp to my feet.”</div>
                </div>
                <span className="rounded-full px-2 py-1 text-[10px] font-bold" style={{ background: '#0b0b0d', color: '#e6f283' }}>Psalm 119:105</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats strip ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-8">
        <div className="card p-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { n: '57', l: 'Lessons' },
            { n: '8', l: 'Learning paths' },
            { n: '8', l: 'Question types' },
            { n: '5 min', l: 'Per day' },
          ].map((s, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="display text-3xl text-strong">{s.n}</div>
              <div className="text-xs uppercase tracking-[0.14em] text-faint mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Features ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <p className="eyebrow">Why it works</p>
            <h2 className="text-3xl sm:text-4xl text-strong mt-2">Built for the long run.</h2>
          </div>
          <span className="hidden sm:block text-sm text-muted max-w-xs">No gamified noise. Just a quiet, well-made habit.</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <div key={i} className="card card-hover p-6">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: f.tint, color: f.ink }}>
                <f.icon size={20} />
              </div>
              <h3 className="font-semibold text-strong text-lg">{f.title}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Paths ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="card overflow-hidden">
          <div className="p-6 sm:p-8 border-b" style={{ borderColor: 'var(--border)' }}>
            <p className="eyebrow">Curriculum</p>
            <h2 className="text-3xl sm:text-4xl text-strong mt-2">Eight paths, one story.</h2>
          </div>
          <div className="grid sm:grid-cols-2">
            {PATHS.map((p, i) => (
              <div key={i} className={`flex items-center gap-3 px-6 py-4 ${i % 2 === 0 ? 'sm:border-r' : ''} border-b`}
                style={{ borderColor: 'var(--border)' }}>
                <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--surface-2)' }}>
                  <Check size={13} className="text-accent" />
                </span>
                <span className="font-medium text-strong text-[15px]">{p}</span>
                <MoveRight size={14} className="ml-auto text-faint" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-3xl sm:text-4xl text-strong mb-7">How it works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: 'Create an account', d: 'Two fields, no email confirmation theatre.' },
            { t: 'Choose a pace', d: 'Five, ten, fifteen or twenty minutes a day.' },
            { t: 'Open a lesson', d: 'Scripture first, questions right after.' },
            { t: 'Grow the habit', d: 'Streaks, memory verses, and gentle review.' },
          ].map((s, i) => (
            <div key={i} className="card p-5">
              <div className="text-[11px] font-bold tracking-[0.18em] text-faint">STEP {String(i + 1).padStart(2, '0')}</div>
              <div className="font-semibold text-strong mt-3">{s.t}</div>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-6">
        <div className="surface-dark relative overflow-hidden p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full" style={{ background: 'rgba(203,186,247,0.18)' }} />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl text-[#f7f5ee]">Start with five quiet minutes.</h2>
            <p className="text-sm text-white/55 mt-2 max-w-md">Free, private, and yours to keep. Visitors can explore the paths before signing up.</p>
          </div>
          <div className="relative flex gap-3">
            <Link to="/signup" className="btn btn-primary">Get started free</Link>
            <Link to="/learn" className="btn" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.22)', color: '#f7f5ee' }}>Browse paths</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
