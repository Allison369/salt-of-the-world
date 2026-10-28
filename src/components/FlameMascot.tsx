import { useEffect, useState } from 'react'

type Mood = 'idle' | 'talking' | 'happy' | 'encouraging' | 'excited'

interface FlameMascotProps {
  mood?: Mood
  message?: string
  size?: number
  showBubble?: boolean
  showLabel?: boolean
}

const messages: Record<Mood, string[]> = {
  idle: ["I'm Spark. Ready when you are.", 'One verse at a time.', 'Small steps, real growth.'],
  talking: ['Listen closely...', 'Here is the heart of it...', "This one's worth remembering."],
  happy: ['Well done!', 'That was solid.', 'You are getting warmer.'],
  encouraging: ['Almost — try once more.', 'Wrong answers teach too.', 'Stay with it. You are close.'],
  excited: ['Perfect round!', 'You are on fire.', 'Look at you shine!'],
}

export default function FlameMascot({ mood = 'idle', message, size = 80, showBubble = true, showLabel = true }: FlameMascotProps) {
  const [currentMessage, setCurrentMessage] = useState(message || messages[mood][0])
  const [blinking, setBlinking] = useState(false)
  const [wobble, setWobble] = useState(0)

  useEffect(() => {
    if (!message) {
      const list = messages[mood]
      setCurrentMessage(list[Math.floor(Math.random() * list.length)])
    } else {
      setCurrentMessage(message)
    }
  }, [mood, message])

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    const interval = setInterval(() => {
      setBlinking(true)
      t = setTimeout(() => setBlinking(false), 130)
    }, 3400)
    return () => { clearInterval(interval); clearTimeout(t) }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setWobble(Math.random() * 2 - 1), 200)
    return () => clearInterval(interval)
  }, [])

  const motion = {
    idle: 'animate-flame-sway',
    talking: 'animate-flame-talk',
    happy: 'animate-flame-hop',
    encouraging: 'animate-flame-lean',
    excited: 'animate-flame-jump',
  }[mood]

  const starEyes = mood === 'excited'
  const happyEyes = mood === 'happy'

  return (
    <div className="relative flex flex-col items-center select-none" style={{ width: size * 1.4 }}>
      {showBubble && (
        <div
          className="mb-1 relative rounded-2xl px-3 py-2 animate-pop"
          style={{
            maxWidth: size * 2.2,
            background: '#fffdf7',
            border: '1px solid rgba(16,16,20,0.10)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <p className="text-xs font-medium text-center leading-snug" style={{ color: '#1b1b22' }}>{currentMessage}</p>
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3 h-3 rotate-45"
            style={{ background: '#fffdf7', borderRight: '1px solid rgba(16,16,20,0.10)', borderBottom: '1px solid rgba(16,16,20,0.10)' }}
          />
        </div>
      )}

      <div className={motion} style={{ width: size, height: size * 1.28 }}>
        <svg viewBox="0 0 120 152" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="flameBody" x1="0.2" y1="0" x2="0.75" y2="1">
              <stop offset="0%" stopColor="#FFE873" />
              <stop offset="38%" stopColor="#FFC42E" />
              <stop offset="78%" stopColor="#FB8C1A" />
              <stop offset="100%" stopColor="#F2650B" />
            </linearGradient>
            <linearGradient id="flameLimb" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDA43A" />
              <stop offset="100%" stopColor="#F26A0C" />
            </linearGradient>
            <radialGradient id="flameGloss" cx="0.32" cy="0.22" r="0.55">
              <stop offset="0%" stopColor="#FFFBE8" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FFF3B0" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFF3B0" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="flameHalo" cx="0.5" cy="0.55" r="0.5">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="eyeIris" x1="0.3" y1="0.2" x2="0.7" y2="0.9">
              <stop offset="0%" stopColor="#6B2F1A" />
              <stop offset="100%" stopColor="#3A150A" />
            </linearGradient>
            <filter id="flameSoft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* warm halo */}
          <ellipse cx="60" cy="82" rx="54" ry="52" fill="url(#flameHalo)" />

          {/* ground shadow */}
          <ellipse cx="60" cy="144" rx="24" ry="5" fill="#B45309" opacity="0.18" filter="url(#flameSoft)" />

          <g transform={`rotate(${wobble * 1.2} 60 130)`}>
            {/* legs */}
            <g fill="url(#flameLimb)">
              <rect x="44" y="118" width="13" height="18" rx="6" />
              <rect x="63" y="118" width="13" height="18" rx="6" />
            </g>
            <ellipse cx="50.5" cy="135" rx="7" ry="3" fill="#D9550B" opacity="0.35" />
            <ellipse cx="69.5" cy="135" rx="7" ry="3" fill="#D9550B" opacity="0.35" />

            {/* arms */}
            <g className={mood === 'talking' || mood === 'happy' ? 'animate-arm-wave' : ''} style={{ transformOrigin: '94px 84px' }}>
              <path d="M93 84 C104 80 110 72 109 62" stroke="url(#flameLimb)" strokeWidth="11" strokeLinecap="round" fill="none" />
            </g>
            <g className={mood === 'encouraging' ? 'animate-arm-lift' : ''} style={{ transformOrigin: '26px 86px' }}>
              <path d="M27 86 C15 84 9 92 12 101" stroke="url(#flameLimb)" strokeWidth="11" strokeLinecap="round" fill="none" />
            </g>

            {/* body */}
            <path
              d="M60 6 C74 26 94 40 99 66 C104 94 86 120 60 120 C34 120 16 94 21 66 C26 40 46 26 60 6 Z"
              fill="url(#flameBody)"
            />
            {/* inner glow + gloss */}
            <ellipse cx="60" cy="104" rx="30" ry="16" fill="#EA580C" opacity="0.22" filter="url(#flameSoft)" />
            <ellipse cx="47" cy="42" rx="20" ry="26" fill="url(#flameGloss)" />
            <path d="M60 10 C70 26 84 38 90 58" stroke="#FFF6C9" strokeWidth="3" strokeLinecap="round" opacity="0.55" fill="none" />

            {/* brows */}
            <g stroke="#C2410C" strokeWidth="3.4" strokeLinecap="round" opacity="0.55" fill="none">
              <path d={mood === 'encouraging' ? 'M34 48 q7 -4 13 -1' : 'M35 47 q7 -3 13 -3'} />
              <path d={mood === 'encouraging' ? 'M86 48 q-7 -4 -13 -1' : 'M85 47 q-7 -3 -13 -3'} />
            </g>

            {/* eyes */}
            {happyEyes ? (
              <g stroke="#5A2410" strokeWidth="4.2" strokeLinecap="round" fill="none">
                <path d="M35 74 q9 -10 18 0" />
                <path d="M67 74 q9 -10 18 0" />
              </g>
            ) : blinking ? (
              <g stroke="#5A2410" strokeWidth="3.6" strokeLinecap="round" fill="none">
                <path d="M36 73 q8 5 16 0" />
                <path d="M68 73 q8 5 16 0" />
              </g>
            ) : (
              <g>
                <ellipse cx="44" cy="73" rx="14.5" ry="16" fill="#FFFDF7" />
                <ellipse cx="76" cy="73" rx="14.5" ry="16" fill="#FFFDF7" />
                <circle cx="45" cy="75" r="9.4" fill="url(#eyeIris)" />
                <circle cx="77" cy="75" r="9.4" fill="url(#eyeIris)" />
                {starEyes ? (
                  <g fill="#FFF3B0">
                    <path d="M45 68 l2.2 5 5 2.2 -5 2.2 -2.2 5 -2.2 -5 -5 -2.2 5 -2.2 Z" />
                    <path d="M77 68 l2.2 5 5 2.2 -5 2.2 -2.2 5 -2.2 -5 -5 -2.2 5 -2.2 Z" />
                  </g>
                ) : (
                  <g fill="#FFFFFF">
                    <circle cx="41.6" cy="70" r="3.2" />
                    <circle cx="73.6" cy="70" r="3.2" />
                    <circle cx="48" cy="80" r="1.5" opacity="0.8" />
                    <circle cx="80" cy="80" r="1.5" opacity="0.8" />
                  </g>
                )}
              </g>
            )}

            {/* cheeks */}
            <ellipse cx="30" cy="88" rx="6.5" ry="4.4" fill="#FB7185" opacity="0.5" />
            <ellipse cx="90" cy="88" rx="6.5" ry="4.4" fill="#FB7185" opacity="0.5" />

            {/* mouth */}
            {mood === 'talking' ? (
              <g className="animate-mouth">
                <ellipse cx="60" cy="97" rx="6.5" ry="5" fill="#7A2A12" />
                <ellipse cx="60" cy="99.5" rx="4" ry="2.2" fill="#F87171" />
              </g>
            ) : mood === 'excited' ? (
              <g>
                <path d="M51 93 q9 13 18 0 q-9 5 -18 0 Z" fill="#7A2A12" />
                <ellipse cx="60" cy="98.5" rx="5.5" ry="3" fill="#F87171" />
              </g>
            ) : happyEyes ? (
              <path d="M52 94 q8 8 16 0" stroke="#7A2A12" strokeWidth="3.4" strokeLinecap="round" fill="none" />
            ) : mood === 'encouraging' ? (
              <path d="M53 97 q7 4 14 0" stroke="#7A2A12" strokeWidth="3.2" strokeLinecap="round" fill="none" />
            ) : (
              <g>
                <path d="M53 95 q7 6 14 0" stroke="#7A2A12" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                <ellipse cx="60" cy="99" rx="4" ry="2" fill="#F87171" opacity="0.9" />
              </g>
            )}

            {/* sparkles for celebration */}
            {mood === 'excited' && (
              <g fill="#FDE68A" className="animate-twinkle">
                <path d="M100 26 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" />
                <path d="M16 46 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 Z" opacity="0.8" />
                <path d="M104 60 l1.4 3.4 3.4 1.4 -3.4 1.4 -1.4 3.4 -1.4 -3.4 -3.4 -1.4 3.4 -1.4 Z" opacity="0.7" />
              </g>
            )}
            {mood === 'happy' && (
              <g fill="#FDE68A" className="animate-twinkle">
                <path d="M101 34 l1.8 4.4 4.4 1.8 -4.4 1.8 -1.8 4.4 -1.8 -4.4 -4.4 -1.8 4.4 -1.8 Z" />
              </g>
            )}
          </g>
        </svg>
      </div>

      {showLabel && (
        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase mt-0.5" style={{ color: 'var(--text-faint)' }}>
          Spark
        </div>
      )}
    </div>
  )
}
