import './Service.css'
import ServiceCard from '../Components/ServiceCard'

function Service() {
  return (
    <div>
        <section className="hero-services">
        <ServiceCard/>
        </section>
        <section className="talk">
            <div>
            <h2>¡Hablémos!</h2>
            <p>Queremos escucharte...</p>
            </div>
            <a href="index.html#contact" className="secundary-button">COTIZAR AHORA</a>
        </section>
    </div>
  )
}

export default Service