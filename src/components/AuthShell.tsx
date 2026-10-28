import FlameMascot from './FlameMascot'

interface AuthShellProps {
  eyebrow: string
  title: string
  subtitle: string
  children: React.ReactNode
  footer: React.ReactNode
  message?: string
}

export default function AuthShell({ eyebrow, title, subtitle, children, footer, message }: AuthShellProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-4 items-stretch">
        {/* Dark side panel */}
        <div className="surface-dark relative overflow-hidden p-8 sm:p-10 hidden lg:flex flex-col justify-between min-h-[520px]">
          <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full" style={{ background: 'rgba(203,186,247,0.14)' }} />
          <div className="absolute right-6 top-6 w-16 h-16 rounded-full" style={{ background: 'rgba(183,224,176,0.16)' }} />
          <div className="relative">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Daily bread</p>
            <h2 className="text-4xl text-[#f7f5ee] mt-4 leading-[1.05]">
              Five quiet<br />minutes.
              <br />
              <span className="italic text-[#cbbaf7]">Every day.</span>
            </h2>
            <p className="text-sm text-white/55 mt-4 max-w-xs leading-relaxed">
              Short lessons, real Scripture, and a streak that forgives. That is the whole idea.
            </p>
          </div>

          <div className="relative flex flex-col items-center gap-3 py-6">
            <FlameMascot mood="idle" size={110} showLabel={false} message={message || 'Good to see you again.'} />
          </div>

          <div className="relative">
            <p className="text-[13px] text-white/70 leading-relaxed max-w-xs">
              “Your word is a lamp to my feet, and a light for my path.”
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/35 mt-2">Psalm 119:105</p>
          </div>
        </div>

        {/* Form side */}
        <div className="card p-7 sm:p-10 flex flex-col justify-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="text-[32px] sm:text-[38px] text-strong mt-2">{title}</h1>
          <p className="text-muted text-sm mt-2 mb-7">{subtitle}</p>
          {children}
          <div className="mt-6 text-sm text-muted">{footer}</div>
        </div>
      </div>
    </div>
  )
}
