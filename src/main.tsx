import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from '@/modules/landing/pages/index.tsx'
import "@/styles/main.scss"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
