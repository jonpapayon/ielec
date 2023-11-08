import './PrimaryBtn.css'

function PrimaryBtn({text, url}) {
  return (
    <a href={url} className="primary-button">{text}</a>
  )
}

export default PrimaryBtn