import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/footer'
import Home from './pages/home'
import Terms from './pages/terms'

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-black">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}