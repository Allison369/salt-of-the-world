import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { signUp } from '../lib/auth'
import Layout from '../components/Layout'
import AuthShell from '../components/AuthShell'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useApp()
  const nav = useNavigate()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return }
    setLoading(true)
    try {
      const u = signUp(email, password, name)
      login(u)
      nav('/onboarding')
    } catch (err: any) {
      setError(err.message)
    } finally { setLoading(false) }
  }

  return (
    <Layout>
      <AuthShell
        eyebrow="Get started"
        title="Start with one lesson."
        subtitle="Free, private, and quiet. No credit card, no noise."
        message="Hi, I'm Spark. Let's go."
        footer={<span>Already have an account? <Link to="/login" className="text-accent font-semibold">Sign in</Link></span>}
      >
        {error && <div className="alert-danger p-3 mb-4 text-sm">{error}</div>}
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="eyebrow block mb-1.5">Display name</label>
            <input className="input" type="text" placeholder="What should we call you?" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className="eyebrow block mb-1.5">Email</label>
            <input className="input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="eyebrow block mb-1.5">Password</label>
            <input className="input" type="password" placeholder="At least 6 characters" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-full mt-2" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
        </form>
      </AuthShell>
    </Layout>
  )
}
