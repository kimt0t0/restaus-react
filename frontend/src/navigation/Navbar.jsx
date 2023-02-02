import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'

function Navbar () {
  return (
    <nav className='navbar'>
      <Link className='navlink' to='/'>Accueil</Link>
      <Link className='navlink' to='/about'>A propos</Link>
      <Link className='navlink' to='/restaurants'>Restaurants</Link>
    </nav>
  )
}

export default Navbar
