export interface Tutor {
  id: number
  name: string
  subject: string
  rating: number
  price: number
  experience: number
  specialties: string[]
  matchScore: number
  avatar: string
  bio: string
  availability: string[]
  verified: boolean
  email?: string
  phone?: string
  education?: string
  languages?: string[]
}

export interface TutorFormData {
  name: string
  email: string
  phone: string
  subject: string
  experience: string
  price: number
  bio?: string
  specialties: string[]
  availability: string[]
}

export interface SearchFilters {
  searchTerm: string
  selectedSubject: string
  priceRange: [number, number]
  minRating: number
  availability: string[]
}

export interface ValidationError {
  field: string
  message: string
}

export interface FormValidationResult {
  isValid: boolean
  errors: ValidationError[]
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}