import './Hero.css'
import PrimaryBtn from './PrimaryBtn'

function Hero() {
  return (
    <section className="hero">
        <div className="hero--mask">
            <div className="hero__container">
                <h1>Energía en Acción: Construcción Eléctrica de Excelencia</h1>
                <h2>Nos dedicamos a la construcción eléctrica con un enfoque inquebrantable en la calidad y la seguridad. Nuestra pasión por la excelencia nos impulsa a superar expectativas en cada proyecto.</h2>
                <PrimaryBtn url='#contact' text='COTIZAR AHORA'/>
            </div>
        </div>
    </section>
    )
}

export default Hero