import { Link } from 'react-router-dom'
import logo from '../assets/ielec-logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <Link to="/" className="brand">
          <span className="badge"><img src={logo} alt="IELEC" width="44" /></span>IELEC
        </Link>
        <div className="flinks">
          <Link to="/#services">Servicios</Link>
          <Link to="/#contact">Cotizar</Link>
          <Link to="/#contact">Contacto</Link>
        </div>
        <p>Hecho con amor por <a href="https://webwizards.lat">Web Wizards</a></p>
      </div>
    </footer>
  )
}
