import './Form.css'

// const formuario = document.querySelector('#miFormulario')
// const buttonMailto = document.querySelector('#trucazo')
// formuario.addEventListener('submit', handleSubmit)
// function handleSubmit(event) {
//     event.preventDefault()
//     const form = new FormData(this)
//     console.log(form.get('nombre'))
//     buttonMailto.setAttribute('href', `mailto:whyjonpapayon@gmail.com?subject=nombre: ${form.get('nombre')} correo: ${form.get('email')} ceular: ${form.get('telefono')}&body=${form.get('mensaje')}`)
//     buttonMailto.click()
// }

function Form() {
    return (
    <form className="contact__form" id="miFormulario">

        <label htmlFor="nombre">
            Nombre <span>*</span>   
        </label>
        <input type="text" id="nombre" name="nombre" 
        placeholder="Ingresa tu nombre..." required
        autoComplete="name"/>
        
        <label htmlFor="email">
            Correo Electrónico <span>*</span>
        </label>
        <input type="email" id="email" name="email" 
        placeholder="Ingresa tu dirección de correo electrónico..." required autoComplete="email"/>

        <label htmlFor="telefono">
            Teléfono Celular <span>*</span>
        </label>
        <input type="tel" id="telefono" name="telefono" placeholder="Ingresa tu número de celular..." 
        required 
        autoComplete="tel"/>
    
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

        <label htmlFor="miCheckbox">
        <input type="checkbox" id="miCheckbox" name="aceptoTerminos" value="si" required/>
            Permito que este sitio web almacene mi información para que puedan responder a mi consulta. <span>*</span>
        </label>
        <input className="primary-button--submit" type="submit" value="COTIZAR AHORA"/>
    </form>
)
}

export default Form