import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../components/navbar/navbar.css'
import '../components/home/home.css'
import '../components/divisions/divisions.css'
import '../components/links/links.css'
import '../components/events/events.css'
import '../components/projects/projects.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
