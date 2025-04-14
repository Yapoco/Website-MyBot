import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Commands from './pages/Commands'
import Settings from './pages/Settings'
import './App.css'

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="logo">MyBotLifeNiceFree</Link>
        <div className="menu">
          <Link to="/commands">Comandos</Link>
          <Link to="/settings">Ajustes</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
