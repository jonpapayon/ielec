import { Link } from 'react-router-dom'
import Reveal from '../Components/Reveal'
import { services } from '../services'
import hero from '../assets/hero-img.jpeg'
import cascos from '../assets/cascos.jpeg'

const WA = '523515098464'

export default function Home() {
  const send = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const text = `Hola, soy ${f.get('nombre')}. Tel: ${f.get('tel')}. Correo: ${f.get('email')}.\n${f.get('mensaje')}`
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      <section className="hero" style={{ '--bg': `url(${hero})` }}>
        <div className="wrap hero-in">
          <p className="eyebrow">Construcción eléctrica · Chilchota, Michoacán</p>
          <h1>Energía en <em>acción</em></h1>
          <p className="lead">Construcción eléctrica de excelencia, con un enfoque inquebrantable en la calidad y la seguridad. Nuestra pasión por la excelencia nos impulsa a superar expectativas en cada proyecto.</p>
          <div className="cta">
            <a href="#contact" className="btn">COTIZAR AHORA</a>
            <a href="#services" className="btn ghost">VER SERVICIOS</a>
          </div>
        </div>
      </section>

      <div className="marq">
        <div>{[...services, ...services].map((s, i) => <span key={i}>{s.title} ✦</span>)}</div>
      </div>

      <section className="sec light" id="benefits">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Compromiso con la calidad</p>
            <h2>Potencia y precisión en cada obra</h2>
            <p>Convierta sus ideas en realidades eléctricas con nuestro equipo de expertos en construcción eléctrica. La potencia y precisión son nuestra marca registrada, y su satisfacción es nuestro objetivo principal.</p>
            <div className="pts"><b>Calidad</b><b>Seguridad</b><b>Precisión</b></div>
            <a href="#services" className="btn">VER SERVICIOS</a>
          </Reveal>
          <Reveal className="photo" delay={150}>
            <img src={cascos} alt="Cascos de seguridad" />
          </Reveal>
        </div>
      </section>

      <section className="sec" id="services">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Soluciones energéticas sostenibles</p>
            <h2>Construcción eléctrica de confianza</h2>
            <p className="mut">La confianza es la base de todo lo que hacemos. Nuestra construcción eléctrica de calidad superior ha establecido conexiones duraderas en la industria.</p>
          </Reveal>
          <div className="grid">
            {services.map((s, i) => (
              <Reveal as={Link} to={`/service#${s.id}`} className="card" delay={i * 80} key={s.id}>
                <img src={s.img} alt="" />
                <div><small>0{i + 1}</small><h3>{s.title}</h3></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sec dark2" id="contact">
        <div className="wrap contact">
          <Reveal className="info">
            <p className="eyebrow">Consulta gratuita</p>
            <h2>Contáctanos y cotiza tu proyecto</h2>
            <p className="mut">Completa el formulario y uno de nuestros expertos en construcción eléctrica se pondrá en contacto contigo en breve. ¡Construyamos juntos un futuro más brillante!</p>
            <h3>Teléfono</h3>
            <a href="tel:+523515098464">+52 351 509 8464</a>
            <h3>Correo</h3>
            <a href="mailto:contacto@electricaielec.com">contacto@electricaielec.com</a>
            <h3>Ubicación</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Chilchota+Michoacan" target="_blank" rel="noreferrer">Chilchota, Michoacán</a>
            <h3>Horario</h3>
            <p className="mut">Lunes a viernes: 7:30 am – 7:00 pm<br />Sábado: 10:00 am – 2:00 pm</p>
          </Reveal>
          <Reveal className="card-f" delay={150}>
            <form onSubmit={send}>
              <label>Nombre<input name="nombre" required autoComplete="name" /></label>
              <label>Correo electrónico<input type="email" name="email" required autoComplete="email" /></label>
              <label>Teléfono celular<input type="tel" name="tel" required autoComplete="tel" /></label>
              <label>Mensaje<textarea name="mensaje" rows="5" required /></label>
              <button className="btn">ENVIAR POR WHATSAPP</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
