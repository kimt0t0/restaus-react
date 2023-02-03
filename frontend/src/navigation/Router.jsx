import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Restaurants from '../pages/Restaurants'
import Restaurant from '../pages/Restaurant'
import AddRestaurant from '../pages/AddRestaurant'

function Router () {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/restaurants' element={<Restaurants />} />
      <Route path='/add-restaurant' element={<AddRestaurant />} />
      {/* <Route path='/restaurant'>
        <Route path=':slug' element={<Restaurant />} />
      </Route> */}
      <Route path='/restaurant'>
        <Route path=':id' element={<Restaurant />} />
      </Route>
    </Routes>
  )
}

export default Router
