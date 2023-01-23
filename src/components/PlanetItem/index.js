// Write your code here

import './index.css'

const PlanetItem = props => {
  const {each} = props
  const {name, imageUrl, description} = each
  return (
    <div className="list-container">
      <img className="image" src={imageUrl} alt={`planet${name}`} />
      <div className="width">
        <h1 className="name-heading">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
