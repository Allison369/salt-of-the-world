import type { UserProfile } from '../types'
import { loadUsers, saveUsers, setSession } from './storage'

export function signUp(email: string, password: string, displayName: string): UserProfile {
  const users = loadUsers()
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error('An account with this email already exists.')
  }
  const user: UserProfile = {
    id: crypto.randomUUID(),
    displayName: displayName || email.split('@')[0],
    email,
    password,
    knowledgeLevel: 'beginner',
    interests: [],
    dailyGoalMinutes: 10,
    reminders: false,
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  saveUsers(users)
  setSession(user.id)
  return user
}

export function signIn(email: string, password: string): UserProfile {
  const users = loadUsers()
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
  if (!user) throw new Error('Invalid email or password.')
  setSession(user.id)
  return user
}

export function signOut() { setSession(null) }

export function getCurrentUser(): UserProfile | null {
  // read session from storage at call time
  const sid = localStorage.getItem('db_session')
  if (!sid) return null
  return loadUsers().find(u => u.id === sid) || null
}

export function updateUser(updated: UserProfile) {
  const users = loadUsers()
  const idx = users.findIndex(u => u.id === updated.id)
  if (idx >= 0) { users[idx] = updated; saveUsers(users) }
}

export function resetPassword(email: string, newPassword: string): boolean {
  const users = loadUsers()
  const idx = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase())
  if (idx < 0) return false
  users[idx].password = newPassword
  saveUsers(users)
  return true
}