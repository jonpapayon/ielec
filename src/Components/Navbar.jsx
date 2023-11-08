import { NavLink } from "react-router-dom"
import './Navbar.css'
import ielecLogo from '../assets/ielec-logo.png' 
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'

// const menu = document.querySelector('#menu')
// const open = document.querySelector('#open')
// const close = document.querySelector('#close')
// open.addEventListener('click', () => {
//     menu.classList.add('visible')
// })
// close.addEventListener('click', () => {
//     menu.classList.remove('visible')
// })

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
                <XCircleIcon className="x-circle-icon"/>
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