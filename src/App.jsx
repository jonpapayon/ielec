import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'
import Service from './pages/Service'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/service', element: <Service /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
