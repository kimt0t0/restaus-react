import { useState, useEffect } from 'react'
import RestaurantsList from '../components/RestaurantsList'
import { getRestaurants } from '../services/Api'

function Restaurants () {
  const [restaurants, setRestaurants] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await getRestaurants()
      setRestaurants(result.data)
    }
    getData()
  }, [])

  if (!restaurants) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <h1>Restaurants</h1>
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Restaurants
