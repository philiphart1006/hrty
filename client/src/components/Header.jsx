// * Packages
import { Link } from 'react-router-dom'

// * Styling & Images
import logoSq from '../assets/hrt_favi.png'

// * Default function
export default function Header(){

  return(
    <header>
      <img className='logo-icon' src={logoSq} alt='hrty logo'/>
      <nav className="header-nav wide-mode">
        <Link to=''>Link 1</Link>
        <Link to=''>Link 2</Link>
        <Link to=''>Link 3</Link>
        <Link to=''>Profile Link</Link>
      </nav>
    </header>
  )
}