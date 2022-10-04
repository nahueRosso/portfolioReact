import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './component/About/About'
import Technology from './component/Technology/Technology'
import Contact from './component/Contact/Contact'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='backg'></div>
    <App />
    <About/>
    <Technology/>
    <Contact/>
  </React.StrictMode>
)
