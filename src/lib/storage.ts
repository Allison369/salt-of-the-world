import type { UserProfile, LessonProgress, UserStats, Achievement, BookmarkedVerse, VerseMemory } from '../types'

const KEYS = {
  users: 'db_users',
  session: 'db_session',
  progress: (uid: string) => `db_progress_${uid}`,
  stats: (uid: string) => `db_stats_${uid}`,
  achievements: (uid: string) => `db_achievements_${uid}`,
  verses: (uid: string) => `db_verses_${uid}`,
  memory: (uid: string) => `db_memory_${uid}`,
  onboarding: (uid: string) => `db_onboarding_${uid}`,
}

export function loadUsers(): UserProfile[] {
  try { return JSON.parse(localStorage.getItem(KEYS.users) || '[]') } catch { return [] }
}
export function saveUsers(u: UserProfile[]) { localStorage.setItem(KEYS.users, JSON.stringify(u)) }

export function getSession(): string | null { return localStorage.getItem(KEYS.session) }
export function setSession(uid: string | null) {
  if (uid) localStorage.setItem(KEYS.session, uid); else localStorage.removeItem(KEYS.session)
}

export function loadProgress(uid: string): Record<string, LessonProgress> {
  try { return JSON.parse(localStorage.getItem(KEYS.progress(uid)) || '{}') } catch { return {} }
}
export function saveProgress(uid: string, p: Record<string, LessonProgress>) {
  localStorage.setItem(KEYS.progress(uid), JSON.stringify(p))
}

const defaultStats = (goal: number): UserStats => ({
  totalXp: 0, level: 1, levelName: 'Seedling', currentStreak: 0, longestStreak: 0,
  lastActivityDate: null, lessonsCompleted: 0, dailyGoalMinutes: goal,
  dailyProgressMinutes: 0, dailyRingClosed: false, dailyDiscoverySeen: null, versesMemorized: 0,
})

export function loadStats(uid: string, goal = 10): UserStats {
  try {
    const raw = localStorage.getItem(KEYS.stats(uid))
    if (!raw) return defaultStats(goal)
    return { ...defaultStats(goal), ...JSON.parse(raw) }
  } catch { return defaultStats(goal) }
}
export function saveStats(uid: string, s: UserStats) { localStorage.setItem(KEYS.stats(uid), JSON.stringify(s)) }

export function loadAchievements(uid: string): Achievement[] {
  try { return JSON.parse(localStorage.getItem(KEYS.achievements(uid)) || 'null') ?? null } catch { return null as any }
}
export function saveAchievements(uid: string, a: Achievement[]) { localStorage.setItem(KEYS.achievements(uid), JSON.stringify(a)) }

export function loadVerses(uid: string): BookmarkedVerse[] {
  try { return JSON.parse(localStorage.getItem(KEYS.verses(uid)) || '[]') } catch { return [] }
}
export function saveVerses(uid: string, v: BookmarkedVerse[]) { localStorage.setItem(KEYS.verses(uid), JSON.stringify(v)) }

export function loadMemory(uid: string): VerseMemory[] {
  try { return JSON.parse(localStorage.getItem(KEYS.memory(uid)) || '[]') } catch { return [] }
}
export function saveMemory(uid: string, m: VerseMemory[]) { localStorage.setItem(KEYS.memory(uid), JSON.stringify(m)) }

export function isOnboarded(uid: string): boolean { return localStorage.getItem(KEYS.onboarding(uid)) === '1' }
export function setOnboarded(uid: string) { localStorage.setItem(KEYS.onboarding(uid), '1') }