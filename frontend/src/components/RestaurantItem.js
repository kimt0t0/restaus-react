import { useNavigate } from 'react-router-dom'
import '../styles/RestaurantItem.scss'

function RestaurantItem ({ restaurant }) {
  const { attributes } = restaurant
  const navigate = useNavigate()
  const handleClick = (restaurant) => {
    navigate(`/restaurant/${restaurant.attributes.slug}`, { id: restaurant.id })
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <img className='card-img' src={`${process.env.REACT_APP_IMG_URL}${attributes.photo.data.attributes.url}`} alt='' />
        <div className='overlay'>
          <h2 className='card-title'>{attributes.name}</h2>
        </div>
      </div>
      <div className='card-content'>
        <p>{attributes.description}</p>
      </div>
      <div className='card-footer'>
        <button className='card-action' onClick={() => handleClick(restaurant)}>Voir la carte</button>
      </div>
    </div>
  )
}

export default RestaurantItem
