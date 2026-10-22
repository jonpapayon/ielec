import { Link } from 'react-router-dom'
import Reveal from '../Components/Reveal'
import { services } from '../services'

export default function Service() {
  return (
    <>
      <section className="page-h">
        <div className="wrap">
          <p className="eyebrow">Servicios</p>
          <h1>Asesoría especializada</h1>
        </div>
      </section>
      <div className="wrap">
        {services.map((s) => (
          <Reveal key={s.id} id={s.id} className="svc">
            <div className="photo"><img src={s.img} alt={s.title} /></div>
            <div>
              <h2>{s.title}</h2>
              <p className="mut">{s.text}</p>
              <Link to="/#contact" className="btn">COTIZAR AHORA</Link>
            </div>
          </Reveal>
        ))}
      </div>
      <section className="sec">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2>¡Hablemos!</h2>
          <p className="mut" style={{ marginBottom: 24 }}>Queremos escucharte...</p>
          <Link to="/#contact" className="btn">COTIZAR AHORA</Link>
        </div>
      </section>
    </>
  )
}
