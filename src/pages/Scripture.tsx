import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Layout from '../components/Layout'
import { Plus, Trash2, Eye, EyeOff, Check } from 'lucide-react'

const VERSE_BANK = [
  { ref: 'John 3:16', text: 'For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.' },
  { ref: 'Psalm 23:1', text: 'The LORD is my shepherd; I shall not want.' },
  { ref: 'Philippians 4:13', text: 'I can do all things through Christ, who strengthens me.' },
  { ref: 'Proverbs 3:5', text: 'Trust in the LORD with all your heart, and do not lean on your own understanding.' },
  { ref: 'Romans 8:28', text: 'We know that all things work together for good for those who love God.' },
  { ref: 'Matthew 5:14', text: 'You are the light of the world. A city located on a hill cannot be hidden.' },
  { ref: 'John 14:6', text: 'Jesus said to him, "I am the way, the truth, and the life. No one comes to the Father, except through me."' },
  { ref: '1 John 4:16', text: 'God is love, and he who remains in love remains in God, and God remains in him.' },
]

export default function Scripture() {
  const { verses, addVerse, removeVerse, memory, setMemory, stats, updateStats } = useApp()
  const [selected, setSelected] = useState(VERSE_BANK[0])
  const [mode, setMode] = useState<'read' | 'hide' | 'reconstruct'>('read')
  const [hiddenWords, setHiddenWords] = useState<Set<number>>(new Set())
  const [bank, setBank] = useState<string[]>([])
  const [placed, setPlaced] = useState<string[]>([])
  const [result, setResult] = useState<string | null>(null)

  const words = selected.text.split(' ')

  const startHide = () => {
    setMode('hide')
    setHiddenWords(new Set())
    setResult(null)
  }
  const toggleHide = (i: number) => {
    const s = new Set(hiddenWords)
    if (s.has(i)) s.delete(i); else s.add(i)
    setHiddenWords(s)
  }
  const startReconstruct = () => {
    setMode('reconstruct')
    const hidden = Array.from(hiddenWords)
    const hiddenTexts = hidden.map(i => words[i])
    setBank([...hiddenTexts].sort(() => Math.random() - 0.5))
    setPlaced([])
    setResult(null)
  }
  const placeWord = (w: string) => {
    setPlaced(p => [...p, w])
    setBank(b => { const i = b.indexOf(w); return [...b.slice(0, i), ...b.slice(i + 1)] })
  }
  const unplace = (i: number) => {
    const w = placed[i]
    setPlaced(p => [...p.slice(0, i), ...p.slice(i + 1)])
    setBank(b => [...b, w])
  }
  const checkReconstruct = () => {
    const hidden = Array.from(hiddenWords).sort((a, b) => a - b)
    const expected = hidden.map(i => words[i])
    const ok = JSON.stringify(placed) === JSON.stringify(expected)
    setResult(ok ? 'correct' : 'incorrect')
    if (ok) {
      const already = memory.find(m => m.reference === selected.ref)
      if (!already) {
        const newMem: any = { reference: selected.ref, text: selected.text, strength: 'steady', nextReviewAt: new Date(Date.now() + 86400000).toISOString(), intervalDays: 1, successfulReviews: 1, lastReviewedAt: new Date().toISOString() }
        setMemory([...memory, newMem])
        updateStats({ versesMemorized: stats.versesMemorized + 1 })
      }
    }
  }

  const bookmark = () => {
    addVerse({ id: crypto.randomUUID(), reference: selected.ref, text: selected.text, translation: 'WEB', createdAt: new Date().toISOString() })
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <p className="eyebrow">Hidden words, folded paper</p>
        <h1 className="text-[36px] sm:text-[46px] text-strong mt-2">Scripture memory.</h1>
        <p className="text-muted mt-2 max-w-lg">Read it. Hide a few words. Rebuild it from memory. That is the whole method.</p>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-4 mt-8">
          <div className="card p-4">
            <h3 className="eyebrow mb-3">Verse bank</h3>
            <div className="space-y-1 max-h-80 overflow-auto pr-1">
              {VERSE_BANK.map(v => (
                <button key={v.ref} onClick={() => { setSelected(v); setMode('read'); setHiddenWords(new Set()); setResult(null) }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition ${selected.ref === v.ref ? 'bg-soft text-strong font-semibold' : 'text-muted hover:bg-soft'}`}>
                  {v.ref}
                </button>
              ))}
            </div>
            <button onClick={bookmark} className="btn btn-ghost w-full mt-3 text-sm"><Plus size={14} /> Bookmark</button>
          </div>

          <div className="card p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl text-strong">{selected.ref}</h2>
              <span className="pill">WEB</span>
            </div>

            {mode === 'read' && (
              <>
                <p className="display text-[22px] leading-[1.5] text-strong mb-6">{selected.text}</p>
                <div className="flex gap-2">
                  <button onClick={startHide} className="btn btn-primary">Hide words</button>
                </div>
              </>
            )}

            {mode === 'hide' && (
              <>
                <p className="display text-[22px] leading-[1.7] text-strong mb-4">
                  {words.map((w, i) => (
                    <span key={i} onClick={() => toggleHide(i)}
                      className={`cursor-pointer mr-1 rounded px-0.5 transition ${hiddenWords.has(i) ? 'bg-accent' : ''}`}>{w} </span>
                  ))}
                </p>
                <p className="text-xs text-faint mb-4 flex items-center gap-1.5"><EyeOff size={12} /> Tap words to hide them, then rebuild the verse.</p>
                <div className="flex gap-2">
                  <button onClick={startReconstruct} disabled={hiddenWords.size === 0} className="btn btn-primary">Reconstruct</button>
                  <button onClick={() => setMode('read')} className="btn btn-ghost">Cancel</button>
                </div>
              </>
            )}

            {mode === 'reconstruct' && (
              <>
                <p className="display text-[22px] leading-[1.8] text-strong mb-5">
                  {words.map((w, i) => (
                    <span key={i} className="mr-1">
                      {hiddenWords.has(i)
                        ? <span className="inline-block min-w-[3rem] border-b-2 mx-1 align-baseline" style={{ borderColor: 'var(--accent-strong)' }}>{'\u00A0'.repeat(w.length)}</span>
                        : w + ' '}
                    </span>
                  ))}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 min-h-[2.5rem] p-2.5 rounded-xl" style={{ background: 'var(--surface-2)' }}>
                  {placed.map((w, i) => (
                    <button key={i} onClick={() => unplace(i)} className="px-3 py-1 bg-accent rounded-full text-sm font-medium">{w}</button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {bank.map((w, i) => (
                    <button key={i} onClick={() => placeWord(w)} className="px-3 py-1 border border-soft rounded-full text-sm hover:bg-soft">{w}</button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={checkReconstruct} disabled={bank.length > 0} className="btn btn-primary">Check</button>
                  <button onClick={() => setMode('hide')} className="btn btn-ghost">Back</button>
                </div>
                {result && (
                  <div className={`mt-4 p-3.5 rounded-xl text-sm ${result === 'correct' ? 'feedback-good text-strong' : 'feedback-bad text-strong'}`}>
                    <span className="inline-flex items-center gap-1.5 font-semibold mr-1">
                      {result === 'correct' ? <Check size={14} className="text-accent" /> : null}
                      {result === 'correct' ? 'Well done.' : 'Not quite.'}
                    </span>
                    {result === 'correct' ? 'Verse marked as memorized.' : 'Try again — it is closer than it feels.'}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="card p-5 mt-4">
          <h3 className="font-semibold text-strong mb-3 flex items-center gap-2"><Eye size={15} className="text-accent" /> Bookmarked verses ({verses.length})</h3>
          {verses.length === 0 && <p className="text-sm text-muted">No bookmarks yet — save one from the verse bank.</p>}
          <div className="space-y-2">
            {verses.map(v => (
              <div key={v.id} className="flex items-start justify-between gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-2)' }}>
                <div>
                  <div className="font-semibold text-sm text-strong">{v.reference}</div>
                  <div className="text-xs text-muted mt-0.5">{v.text}</div>
                </div>
                <button onClick={() => removeVerse(v.id)} style={{ color: 'var(--danger)' }}><Trash2 size={14} /></button>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted mt-4">{stats.versesMemorized} verses memorized · spaced review keeps them warm.</p>
      </div>
    </Layout>
  )
}
