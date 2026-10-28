import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { signIn } from '../lib/auth'
import Layout from '../components/Layout'
import AuthShell from '../components/AuthShell'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useApp()
  const nav = useNavigate()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const u = signIn(email, password)
      login(u)
      nav(u && (localStorage.getItem('db_onboarding_' + u.id) === '1') ? '/dashboard' : '/onboarding')
    } catch (err: any) {
      setError(err.message)
    } finally { setLoading(false) }
  }

  return (
    <Layout>
      <AuthShell
        eyebrow="Welcome back"
        title="Pick up your streak."
        subtitle="Sign in to continue where you left off."
        message="You are right on time."
        footer={<span>No account? <Link to="/signup" className="text-accent font-semibold">Create one</Link></span>}
      >
        {error && <div className="alert-danger p-3 mb-4 text-sm">{error}</div>}
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="eyebrow block mb-1.5">Email</label>
            <input className="input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="eyebrow block mb-1.5">Password</label>
            <input className="input" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-full mt-2" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>
      </AuthShell>
    </Layout>
  )
}
