import { NavLink } from "react-router-dom"
import './Navbar.css'
import ielecLogo from '../assets/ielec-logo.png' 
import { Bars3Icon } from '@heroicons/react/24/solid'

function Navbar() {
  return (
    <nav>
        <div className="logo__container">
          <NavLink className='link-logo' to='/'>
            <img src={ielecLogo} alt=""/>
            <h3>IELEC</h3>
          </NavLink>
        </div>
    <div className="menu__container" id="menu">
        <ul>
            <li className="menu--close" id="close">
                <a href=""><img src="./close-icon.png" alt=""/></a>
            </li>
            <NavLink to='/'><li>Inicio</li></NavLink>
            <NavLink to='/#services'><li>Servicios</li></NavLink>
            <NavLink to='/#contact'><li>Contacto</li></NavLink>
        </ul>
    </div>
    <div className="menu__icon" id="open">
        <Bars3Icon className="bars-3-icon"/>
      </div>
    </nav>
  )
}

export default Navbar