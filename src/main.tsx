import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TutorProvider } from './contexts/TutorContext'
import ErrorBoundary from './components/ErrorBoundary'
import './styles/index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <TutorProvider>
          <App />
        </TutorProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)