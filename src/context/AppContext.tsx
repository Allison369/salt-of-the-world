import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { UserProfile, LessonProgress, UserStats, Achievement, BookmarkedVerse, VerseMemory } from '../types'
import { getSession, setSession, loadProgress, saveProgress, loadStats, saveStats, loadAchievements, saveAchievements, loadVerses, saveVerses, loadMemory, saveMemory, isOnboarded, setOnboarded } from '../lib/storage'
import { getCurrentUser, updateUser } from '../lib/auth'
import { LEARNING_PATHS, getLessonsByPath } from '../lib/content'

const LEVEL_NAMES = ['Seedling','Growing','Rooted','Flourishing','Fruitful','Faithful Student']
const LEVEL_XP = [0,100,300,600,1000,1500]

interface Ctx {
  user: UserProfile | null
  setUser: (u: UserProfile | null) => void
  progress: Record<string, LessonProgress>
  stats: UserStats
  achievements: Achievement[]
  verses: BookmarkedVerse[]
  memory: VerseMemory[]
  onboarded: boolean
  login: (u: UserProfile) => void
  logout: () => void
  refreshUser: () => void
  setProgress: (lessonId: string, p: LessonProgress) => void
  addXp: (amount: number) => void
  updateStats: (patch: Partial<UserStats>) => void
  unlockAchievement: (id: string) => void
  addVerse: (v: BookmarkedVerse) => void
  removeVerse: (id: string) => void
  setMemory: (m: VerseMemory[]) => void
  completeOnboarding: (level: UserProfile['knowledgeLevel'], interests: string[], goal: number, reminders: boolean) => void
}

const CtxObj = createContext<Ctx | null>(null)

const defaultAchievements: Achievement[] = [
  { id:'first-steps', title:'First Steps', description:'Complete your first lesson.', icon:'🌱', unlocked:false },
  { id:'daily-bread', title:'Daily Bread', description:'Complete your first daily lesson.', icon:'🍞', unlocked:false },
  { id:'seven-day', title:'Seven-Day Journey', description:'Reach a 7-day streak.', icon:'🔥', unlocked:false },
  { id:'explorer-10', title:'Scripture Explorer', description:'Complete 10 lessons.', icon:'📖', unlocked:false },
  { id:'seeker-50', title:'Knowledge Seeker', description:'Complete 50 lessons.', icon:'🔍', unlocked:false },
  { id:'perfect-lesson', title:'Perfect Lesson', description:'Answer every question correctly in one lesson.', icon:'⭐', unlocked:false },
  { id:'memory-5', title:'Verse Keeper', description:'Memorize 5 verses.', icon:'🧠', unlocked:false },
  { id:'path-complete', title:'Path Finisher', description:'Complete a learning path.', icon:'🏆', unlocked:false },
]

const emptyStats: UserStats = { totalXp:0,level:1,levelName:'Seedling',currentStreak:0,longestStreak:0,lastActivityDate:null,lessonsCompleted:0,dailyGoalMinutes:10,dailyProgressMinutes:0,dailyRingClosed:false,dailyDiscoverySeen:null,versesMemorized:0 }

// Read the saved session synchronously so a hard refresh on a protected page
// doesn't bounce the user to /login before React state is hydrated.
function bootstrap() {
  const sid = getSession()
  if (!sid) return null
  const u = getCurrentUser()
  if (!u) return null
  return {
    user: u,
    progress: loadProgress(u.id),
    stats: loadStats(u.id, u.dailyGoalMinutes),
    achievements: loadAchievements(u.id) || defaultAchievements,
    verses: loadVerses(u.id),
    memory: loadMemory(u.id),
    onboarded: isOnboarded(u.id),
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [boot] = useState(bootstrap)
  const [user, setUserState] = useState<UserProfile | null>(boot?.user ?? null)
  const [progress, setProgressState] = useState<Record<string, LessonProgress>>(boot?.progress ?? {})
  const [stats, setStatsState] = useState<UserStats>(boot?.stats ?? emptyStats)
  const [achievements, setAchievementsState] = useState<Achievement[]>(boot?.achievements ?? defaultAchievements)
  const [verses, setVersesState] = useState<BookmarkedVerse[]>(boot?.verses ?? [])
  const [memory, setMemoryState] = useState<VerseMemory[]>(boot?.memory ?? [])
  const [onboarded, setOnboardedState] = useState(boot?.onboarded ?? false)

  const setUser = (u: UserProfile | null) => setUserState(u)

  const login = (u: UserProfile) => {
    setUserState(u)
    setProgressState(loadProgress(u.id))
    setStatsState(loadStats(u.id, u.dailyGoalMinutes))
    const a = loadAchievements(u.id)
    setAchievementsState(a || defaultAchievements)
    setVersesState(loadVerses(u.id))
    setMemoryState(loadMemory(u.id))
    setOnboardedState(isOnboarded(u.id))
  }

  const logout = () => {
    setSession(null)
    setUserState(null)
    setProgressState({})
  }

  const refreshUser = () => {
    if (user) {
      const u = getCurrentUser()
      if (u) setUserState(u)
    }
  }

  const persistProgress = useCallback((uid: string, p: Record<string, LessonProgress>) => {
    saveProgress(uid, p)
  }, [])

  const setProgress = (lessonId: string, p: LessonProgress) => {
    if (!user) return
    setProgressState(prev => {
      const next = { ...prev, [lessonId]: p }
      persistProgress(user.id, next)
      return next
    })
  }

  const computeLevel = (xp: number) => {
    let lvl = 1
    for (let i = LEVEL_XP.length - 1; i >= 0; i--) {
      if (xp >= LEVEL_XP[i]) { lvl = i + 1; break }
    }
    if (lvl > LEVEL_NAMES.length) lvl = LEVEL_NAMES.length
    return { level: lvl, levelName: LEVEL_NAMES[lvl-1] }
  }

  const addXp = (amount: number) => {
    if (!user) return
    setStatsState(prev => {
      const newXp = prev.totalXp + amount
      const { level, levelName } = computeLevel(newXp)
      const next = { ...prev, totalXp: newXp, level, levelName }
      saveStats(user.id, next)
      return next
    })
  }

  const updateStats = (patch: Partial<UserStats>) => {
    if (!user) return
    setStatsState(prev => {
      const next = { ...prev, ...patch }
      saveStats(user.id, next)
      return next
    })
  }

  const unlockAchievement = (id: string) => {
    if (!user) return
    setAchievementsState(prev => {
      const idx = prev.findIndex(a => a.id === id)
      if (idx < 0 || prev[idx].unlocked) return prev
      const next = [...prev]
      next[idx] = { ...next[idx], unlocked: true, unlockedAt: new Date().toISOString() }
      saveAchievements(user.id, next)
      return next
    })
  }

  const addVerse = (v: BookmarkedVerse) => {
    if (!user) return
    setVersesState(prev => {
      const next = [v, ...prev]
      saveVerses(user.id, next)
      return next
    })
  }
  const removeVerse = (id: string) => {
    if (!user) return
    setVersesState(prev => {
      const next = prev.filter(v => v.id !== id)
      saveVerses(user.id, next)
      return next
    })
  }

  const setMemory = (m: VerseMemory[]) => {
    if (!user) return
    setMemoryState(m)
    saveMemory(user.id, m)
  }

  const completeOnboarding = (level: UserProfile['knowledgeLevel'], interests: string[], goal: number, reminders: boolean) => {
    if (!user) return
    const updated: UserProfile = { ...user, knowledgeLevel: level, interests, dailyGoalMinutes: goal, reminders }
    updateUser(updated)
    setUserState(updated)
    updateStats({ dailyGoalMinutes: goal })
    setOnboardedState(true)
    setOnboarded(user.id)
  }

  // achievement checks
  useEffect(() => {
    if (!user) return
    const completed = Object.values(progress).filter(p => p.status === 'completed').length
    if (completed >= 1) unlockAchievement('first-steps')
    if (completed >= 10) unlockAchievement('explorer-10')
    if (completed >= 50) unlockAchievement('seeker-50')
    if (stats.versesMemorized >= 5) unlockAchievement('memory-5')
    // path complete check
    for (const path of LEARNING_PATHS) {
      const lessons = getLessonsByPath(path.id)
      if (lessons.length > 0 && lessons.every(l => progress[l.id]?.status === 'completed')) {
        unlockAchievement('path-complete')
      }
    }
  }, [progress, stats, user])

  const value: Ctx = {
    user, setUser, progress, stats, achievements, verses, memory, onboarded,
    login, logout, refreshUser, setProgress, addXp, updateStats, unlockAchievement,
    addVerse, removeVerse, setMemory, completeOnboarding,
  }
  return <CtxObj.Provider value={value}>{children}</CtxObj.Provider>
}

export function useApp() {
  const c = useContext(CtxObj)
  if (!c) throw new Error('useApp must be used within AppProvider')
  return c
}



