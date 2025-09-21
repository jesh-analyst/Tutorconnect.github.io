import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Tutor, SearchFilters, LoadingState } from '../types'
import { SAMPLE_TUTORS } from '../constants/tutors'

interface TutorState {
  tutors: Tutor[]
  filteredTutors: Tutor[]
  selectedTutor: Tutor | null
  filters: SearchFilters
  loadingState: LoadingState
  error: string | null
}

type TutorAction =
  | { type: 'SET_TUTORS'; payload: Tutor[] }
  | { type: 'SET_FILTERED_TUTORS'; payload: Tutor[] }
  | { type: 'SET_SELECTED_TUTOR'; payload: Tutor | null }
  | { type: 'UPDATE_FILTERS'; payload: Partial<SearchFilters> }
  | { type: 'SET_LOADING_STATE'; payload: LoadingState }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'QUANTUM_MATCH' }

const initialState: TutorState = {
  tutors: SAMPLE_TUTORS,
  filteredTutors: SAMPLE_TUTORS,
  selectedTutor: null,
  filters: {
    searchTerm: '',
    selectedSubject: '',
    priceRange: [0, 200],
    minRating: 0,
    availability: []
  },
  loadingState: 'idle',
  error: null
}

const tutorReducer = (state: TutorState, action: TutorAction): TutorState => {
  switch (action.type) {
    case 'SET_TUTORS':
      return { ...state, tutors: action.payload }
    
    case 'SET_FILTERED_TUTORS':
      return { ...state, filteredTutors: action.payload }
    
    case 'SET_SELECTED_TUTOR':
      return { ...state, selectedTutor: action.payload }
    
    case 'UPDATE_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } }
    
    case 'SET_LOADING_STATE':
      return { ...state, loadingState: action.payload }
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, loadingState: 'error' }
    
    case 'QUANTUM_MATCH':
      const sortedTutors = [...state.tutors].sort((a, b) => b.matchScore - a.matchScore)
      return { ...state, filteredTutors: sortedTutors, loadingState: 'success' }
    
    default:
      return state
  }
}

const TutorContext = createContext<{
  state: TutorState
  dispatch: React.Dispatch<TutorAction>
} | null>(null)

export const TutorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(tutorReducer, initialState)

  return (
    <TutorContext.Provider value={{ state, dispatch }}>
      {children}
    </TutorContext.Provider>
  )
}

export const useTutorContext = () => {
  const context = useContext(TutorContext)
  if (!context) {
    throw new Error('useTutorContext must be used within a TutorProvider')
  }
  return context
}