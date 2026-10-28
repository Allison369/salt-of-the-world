export type KnowledgeLevel = 'beginner' | 'intermediate' | 'advanced'

export type BibleVersion = 'WEB' | 'NIV' | 'KJV' | 'GNB'

export type QuestionType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'match_pairs'
  | 'order_events'
  | 'true_false'
  | 'scripture_ref'
  | 'word_bank'
  | 'scenario'

export interface Question {
  id: string
  type: QuestionType
  question: string
  options?: string[] // for multiple choice / true false
  correctAnswer: string | string[] // string for single, array for match/order
  pairs?: { left: string; right: string }[] // match
  events?: string[] // order events (correct order)
  wordBank?: string[] // word bank
  blankSentence?: string // fill blank
  explanation: string
  scriptureReference?: string
}

export interface Lesson {
  id: string
  pathId: string
  unitId: string
  title: string
  introduction: string
  learningObjectives: string[]
  estimatedMinutes: number
  questions: Question[]
  summary: string
  scriptureReferences: string[]
}

export interface Unit {
  id: string
  pathId: string
  title: string
  description: string
  order: number
}

export interface LearningPath {
  id: string
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  icon: string
  color: string
  units: Unit[]
}

export interface UserProfile {
  id: string
  displayName: string
  email: string
  password: string
  knowledgeLevel: KnowledgeLevel
  interests: string[]
  dailyGoalMinutes: number
  reminders: boolean
  preferredBibleVersion?: BibleVersion
  createdAt: string
  avatarUrl?: string
}

export interface LessonProgress {
  lessonId: string
  status: 'not_started' | 'in_progress' | 'completed'
  score: number // 0-100
  stars: 0 | 1 | 2 | 3
  attempts: number
  completedAt?: string
  answers: Record<string, unknown>
}

export interface UserStats {
  totalXp: number
  level: number
  levelName: string
  currentStreak: number
  longestStreak: number
  lastActivityDate: string | null
  lessonsCompleted: number
  dailyGoalMinutes: number
  dailyProgressMinutes: number
  dailyRingClosed: boolean
  dailyDiscoverySeen: string | null
  versesMemorized: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  unlockedAt?: string
}

export interface BookmarkedVerse {
  id: string
  reference: string
  text: string
  translation: string
  createdAt: string
}

export interface VerseMemory {
  reference: string
  text: string
  strength: 'weak' | 'steady' | 'solid' | 'mastered'
  nextReviewAt: string
  intervalDays: number
  successfulReviews: number
  lastReviewedAt: string | null
}
