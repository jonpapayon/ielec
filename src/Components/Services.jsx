import './Services.css'
import Card from './Card'
import subterraneas from '../assets/lineas-subterraneas.jpeg'
import bajaTension from '../assets/baja-tension.jpeg'
import bombeos from '../assets/bombeos.jpeg'
import iluminacion from '../assets/iluminacion.jpeg'
import aereas from '../assets/lineas-aereas.jpeg'

function Services() {
  return (
    <section className="services" id="services">
    <div className="services__title-container">
        <h2>SOLUCIONES ENERGÉTICAS SOSTENIBLES</h2>
        <h3>Construcción Eléctrica de Confianza: Creando Conexiones Duraderas</h3>
        <p>La confianza es la base de todo lo que hacemos. Nuestra construcción eléctrica de calidad superior ha establecido conexiones duraderas en la industria. Únase a nosotros en la construcción de un mundo más brillante.</p>
    </div>
    <div className="services__images-container">
        <Card title='Líneas Eléctricas Subterráneas' img={subterraneas}/>
        <Card title='Baja Tensión Industrial y Automatización' img={bajaTension}/>
        <Card title='Bombeos y Líneas de Conducción' img={bombeos}/>
        <Card title='Iluminación en General' img={iluminacion}/>
        <Card title='Líneas Eléctricas Aéreas' img={aereas}/>
    </div>
</section>
  )
}

export default Services