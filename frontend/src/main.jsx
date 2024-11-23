import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeLogout from './pages/HomeLogout'
// import HomeLogin from './pages/HomeLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HomeLogin /> */}
    <HomeLogout />
  </StrictMode>,
)
