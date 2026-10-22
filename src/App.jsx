import { useEffect } from 'react'
import { BrowserRouter, useRoutes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NotFound from './Components/NotFound'

function AppRoutes() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 60)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/service', element: <Service /> },
    { path: '/*', element: <NotFound /> },
  ])
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}
