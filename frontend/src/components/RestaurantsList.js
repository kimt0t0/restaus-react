import RestaurantItem from './RestaurantItem'
import '../styles/RestaurantsList.scss'

function RestaurantsList ({ restaurants }) {
  return (
    <>
      <div className='list-ctn'>
        {
                    restaurants.map(restaurant => {
                      return (
                        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
                      )
                    })
                }
      </div>
    </>
  )
}

export default RestaurantsList
