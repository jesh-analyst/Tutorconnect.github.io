import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import FindTutorPage from './pages/FindTutorPage'
import BecomeTutorPage from './pages/BecomeTutorPage'
import TutorProfilePage from './pages/TutorProfilePage'
import NotFoundPage from './pages/NotFoundPage'

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>TutorConnect - Find Your Perfect Tutor</title>
        <meta name="description" content="Connect college students with expert tutors using quantum matching technology" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-tutor" element={<FindTutorPage />} />
          <Route path="/become-tutor" element={<BecomeTutorPage />} />
          <Route path="/tutor/:id" element={<TutorProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App