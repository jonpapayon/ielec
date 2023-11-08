import './Card.css'

function Card({title, img}) {
  return (
    <div className="services__card-container">
        <figure><img src={img} alt=""/></figure>
        <div className="card__title">
        <h3>{title}</h3>
        <span>></span>
        </div>
    </div>
  )
}

export default Card