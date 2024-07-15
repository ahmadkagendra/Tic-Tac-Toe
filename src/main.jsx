// PACKAGES
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
// STYLE
import './style/style.css'

// PAGES
import TicTacToe from './pages/TicTacToe'
import Home from './pages/Home'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/game' element={<TicTacToe />}/>
      </Routes>
    </Router>
    
  </React.StrictMode>
)
