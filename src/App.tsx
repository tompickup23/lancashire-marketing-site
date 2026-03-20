import { Route, Routes } from 'react-router-dom'
import { SiteFrame } from './components/SiteFrame'
import { DivisionsPage } from './pages/DivisionsPage'
import { DocumentPage } from './pages/DocumentPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <SiteFrame>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research/:slug" element={<DocumentPage />} />
        <Route path="/divisions" element={<DivisionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteFrame>
  )
}

export default App
