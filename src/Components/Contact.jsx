import './Contact.css'
import Form from '../Components/Form'
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="contact__form-container">
            <h2>ÚNETE A NUESTRA RED DE CLIENTES SATISFECHOS</h2>
            <h3>Contáctanos para Consulta Gratuita</h3>
            <p>¿Listo para dar el siguiente paso? ¡Nos encantaría escuchar de ti! Completa nuestro formulario de contacto y uno de nuestros expertos en construcción eléctrica se pondrá en contacto contigo en breve. Estamos aquí para ayudarte a iluminar tus proyectos y responder a todas tus preguntas. ¡Construyamos juntos un futuro más brillante!</p>
            <Form/>
            <a href="mailto:contacto@electricaielec.com" id="trucazo">mail</a>
        </div>
        <div className="contact__map-container">
        {/* <iframe
            width="100%"
            height="400"
            style="border:0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBHWv1HoNtdi5-XEF2fIvUeM1EEx3d5tFI
            &q=Frente+a+plaza+D'Lucca,+Av.+Sta.+Margarita+4140-Local+14,+Plaza+Fontana,+45136+Zapopan,+Jal./@20.7295932,-103.4354307,19.08z/data=!4m6!3m5!1s0x8428af476841550f:0x99667e1eb8023ced!8m2!3d20.7297091!4d-103.435395!16s%2Fg%2F11trrrwvj5?entry=ttu">
        </iframe> */}
        <div className="map__text-container">
            <h3>Planificación Sin Estrés</h3>
            <div>
                <PhoneIcon className='phone-icon'/>
                <a href="tel:+523515098464">+52 351 509 8464</a>
            </div>
            <h3>Ubicación</h3>
                <div>
                    <MapPinIcon className='map-pin-icon'/>
                    <a href="">Chilchota Michoacán</a>
                </div>
                <h3>Horario</h3>
                <div>
                    <p>Lunes-Viernes: 7:30am-7.00pm</p>
                    <p>Sábado: 10.00am-2:00pm</p>
                </div>
            </div>
        </div>
    </section>        
    )
}

export default Contact