import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import Learn from './pages/Learn'
import PathDetail from './pages/PathDetail'
import Lesson from './pages/Lesson'
import Practice from './pages/Practice'
import Scripture from './pages/Scripture'
import Achievements from './pages/Achievements'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Admin from './pages/Admin'

function Protected({ children }: { children: React.ReactNode }) {
  const { user, onboarded } = useApp()
  if (!user) return <Navigate to="/login" replace />
  if (!onboarded) return <Navigate to="/onboarding" replace />
  return <>{children}</>
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
          <Route path="/learn" element={<Protected><Learn /></Protected>} />
          <Route path="/learn/:pathId" element={<Protected><PathDetail /></Protected>} />
          <Route path="/lesson/:lessonId" element={<Protected><Lesson /></Protected>} />
          <Route path="/practice" element={<Protected><Practice /></Protected>} />
          <Route path="/scripture" element={<Protected><Scripture /></Protected>} />
          <Route path="/achievements" element={<Protected><Achievements /></Protected>} />
          <Route path="/profile" element={<Protected><Profile /></Protected>} />
          <Route path="/settings" element={<Protected><Settings /></Protected>} />
          <Route path="/admin" element={<Protected><Admin /></Protected>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}