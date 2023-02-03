import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DishesList from '../components/DishesList'
import { getRestaurantById } from '../services/Api'

function Restaurant () {
  const { state: { id } } = useLocation()

  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await getRestaurantById(id)
      // faire un getDishesByRestaurantId(id) car Strapi ne récupère pas toutes les données à 3 niveaux de profondeur, donc pas la photo des plats
      setRestaurant(result.data.attributes)
    }
    getData()
  }, [])

  console.log(restaurant)

  if (!restaurant) {
    return <h1>Chargement...</h1>
  }

  return (
    <div className='restaurant'>
      <div className='restau-header'>
        <h1>Restaurant - {restaurant.name}</h1>
      </div>
      <div className='restau-content'>
        <DishesList dishes={restaurant.dishes} />
      </div>
    </div>
  )
}

export default Restaurant
