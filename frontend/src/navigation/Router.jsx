import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Restaurants from '../pages/Restaurants'
import Restaurant from '../pages/Restaurant'

function Router () {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/restaurants' element={<Restaurants />} />
      <Route path='/restaurant'>
        <Route path=':slug' element={<Restaurant />} />
      </Route>
      <Route path='/restaurant'>
        <Route path=':id' element={<Restaurant />} />
      </Route>
    </Routes>
  )
}

export default Router
