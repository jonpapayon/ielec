
import Navbar from '../Components/Navbar'
import Hero from "../Components/Hero"
import Benefits from "../Components/Benefits"
import Services from "../Components/Services"
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Benefits/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home