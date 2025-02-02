import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import MenuPage from './components/MenuPage'
import Header from './components/header'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.jsx'
import ReservasPage from './components/Reservas.jsx'
import Footer from './components/footer.jsx'
import { ToastContainer } from 'react-toastify';
import HomePage from './components/Home.jsx'
import Sobre from './components/sobre.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <StrictMode>
        <Header />
        <HomePage />
        <Sobre />
        <MenuPage />
        <ReservasPage />
        <Footer />
        <ToastContainer 
          position="bottom-right"
          autoClose={5000}
        />
      </StrictMode>
    </ThemeProvider>
  </BrowserRouter>
)
