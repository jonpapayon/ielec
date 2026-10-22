import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/ielec-logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <Link to="/" className="brand" onClick={close}><img src={logo} alt="IELEC" />IELEC</Link>
      <button className="burger" aria-label="Menú" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </button>
      <nav className={`links ${open ? 'open' : ''}`}>
        <Link to="/" onClick={close}>Inicio</Link>
        <Link to="/#services" onClick={close}>Servicios</Link>
        <Link to="/#contact" onClick={close}>Contacto</Link>
        <Link to="/#contact" className="btn" onClick={close}>COTIZAR</Link>
      </nav>
    </header>
  )
}
