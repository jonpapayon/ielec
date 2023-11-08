import './ServiceCard.css'
import cascos from '../assets/cascos.jpeg'

function ServiceCard() {
  return (
    <div className='service__card-container'>
        <div className="hero-services__img-container">
            <figure><img src={cascos} alt=""/></figure>
        </div>
        <div className="hero-services__title-container">
            <div className="span--square">
                <span></span>
                <h1>ASESORÍA ESPECIALIZADA</h1>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, nobis fuga! Voluptatum animi odio provident doloribus iste dolores voluptas exercitationem molestiae. Qui, dolore maiores! Totam dolorem corrupti porro neque in. <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aspernatur debitis laudantium quas ad mollitia, odio vel reprehenderit aut, possimus ipsum veritatis unde fuga, dolores magnam dolorum animi voluptatum repudiandae?</p>
            <a href="index.html#contact">COTIZAR AHORA</a>
        </div>
    </div>
  )
}

export default ServiceCard