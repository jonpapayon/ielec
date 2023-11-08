import './Benefits.css'
import cascos from '../assets/cascos.jpeg'

function Benefits() {
  return (
    <section className="benefits" id="benefits">
        <div className="benefits__title-container">
            <h2>COMPROMISO CON LA CALIDAD</h2>
            <h3>Potencia y Precisión: Nuestra Construcción Eléctrica</h3>
            <p>Convierta sus ideas en realidades eléctricas con nuestro equipo de expertos en construcción eléctrica. La potencia y precisión son nuestra marca registrada, y su satisfacción es nuestro objetivo principal.</p>
            <a href="#services">Aprende Más Sobre Nuestra Experiencia</a>
        </div>
        <div className="benefits__img-container">
            <img src={cascos} alt="cascos"/>
        </div>
    </section>
  )
}

export default Benefits