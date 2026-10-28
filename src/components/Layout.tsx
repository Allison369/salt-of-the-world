import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useTheme } from '../lib/theme'
import { SparkMark } from './FlameMascot'
import { Home, BookOpen, Target, User, LogOut, Trophy, Sparkles, Zap, Flame, Sun, Moon } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout, stats } = useApp()
  const { theme, toggle } = useTheme()
  const nav = useNavigate()
  const { pathname } = useLocation()
  const handleLogout = () => { logout(); nav('/') }
  const isActive = (to: string) => (to === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(to))

  return (
    <div className="min-h-screen flex flex-col">
      <header className="app-header">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2.5 shrink-0">
            <span className="brand-mark"><SparkMark size={27} animated /></span>
            <span className="display text-[19px] font-bold tracking-tight text-strong">daily bread</span>
          </Link>

          {user ? (
            <nav className="flex items-center gap-0.5 sm:gap-1">
              <Link to="/dashboard" data-active={isActive('/dashboard')} className="nav-link"><Home size={15} /><span className="hidden sm:inline">Home</span></Link>
              <Link to="/learn" data-active={isActive('/learn')} className="nav-link"><BookOpen size={15} /><span className="hidden sm:inline">Learn</span></Link>
              <Link to="/practice" data-active={isActive('/practice')} className="nav-link hidden sm:inline-flex"><Target size={15} />Practice</Link>
              <Link to="/scripture" data-active={isActive('/scripture')} className="nav-link hidden md:inline-flex"><Sparkles size={15} />Memory</Link>
              <Link to="/achievements" data-active={isActive('/achievements')} className="nav-link hidden md:inline-flex"><Trophy size={15} /></Link>
              <Link to="/profile" data-active={isActive('/profile')} className="nav-link"><User size={15} /></Link>

              <div className="ml-1 sm:ml-2 flex items-center gap-1.5">
                <span className="chip" title="Total XP"><Zap size={13} className="text-amber-500" fill="currentColor" />{stats.totalXp}</span>
                <span className="chip" title="Daily streak"><Flame size={13} className="text-orange-500" fill="currentColor" />{stats.currentStreak}</span>
              </div>

              <button onClick={toggle} className="icon-btn ml-1" aria-label="Toggle color theme" title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <button onClick={handleLogout} className="icon-btn ml-1" aria-label="Sign out"><LogOut size={15} /></button>
            </nav>
          ) : (
            <nav className="flex items-center gap-2">
              <button onClick={toggle} className="icon-btn" aria-label="Toggle color theme">
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <Link to="/login" className="btn btn-ghost">Sign in</Link>
              <Link to="/signup" className="btn btn-primary">Get started</Link>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-16 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="brand-mark" style={{ width: '1.7rem', height: '1.7rem', borderRadius: '0.55rem' }}><SparkMark size={20} /></span>
              <div className="display text-xl font-bold text-strong">daily bread</div>
            </div>
            <p className="text-sm text-muted mt-2 max-w-sm">Short, interactive Bible lessons that help you build a daily habit and grow in faith — one day at a time.</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:justify-end">
            <Link to="/learn" className="footer-link">Learn</Link>
            <Link to="/practice" className="footer-link">Practice</Link>
            <Link to="/achievements" className="footer-link">Achievements</Link>
            <Link to="/settings" className="footer-link">Settings</Link>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-xs text-faint">
            Scripture quotations from the World English Bible (public domain). · Daily Bread
          </div>
        </div>
      </footer>
    </div>
  )
}
