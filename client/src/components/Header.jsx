// * Packages
import { Link } from 'react-router-dom'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

// * Styling & Images
import logoSq from '../assets/hrt_favi.png'

// * Retrieve user login details
const currentUser = localStorage.getItem('hrty-id')
const currentUserImage = localStorage.getItem('hrty-image')

// * Default function
export default function Header(){

  return(
    <header>
      <div className='lhs'>
        <Link to='/' ><img className='logo-icon' src={logoSq} alt='hrty logo'/></Link>
        <p>HRTy</p>
        <p className="wide-mode"> - People Ops with Heart</p>
      </div>
      <div className='rhs'>
        <nav className="header-nav wide-mode">
          <Link to='/teams'>Teams</Link>
          <Link to='/employees'>Employees</Link>
          <Link to='/reviews'>Reviews</Link>
          <Link to='/hardwares'>Equipment</Link>
          <Link to='/softwares'>Subscriptions</Link>
        </nav>
        <Link to={`/employees/${currentUser}/`}><img className='team-pic' src={ currentUserImage } alt='profile photo'/></Link>
        <Menu className="header-ham narrow-mode">
        <MenuButton righticon={ChevronDownIcon} className='narrow-mode'>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Teams</MenuItem>
          <MenuItem>Employees</MenuItem>
          <MenuItem>Reviews</MenuItem>
          <MenuItem>Equipment</MenuItem>
          <MenuItem>Subscriptions</MenuItem>
          <MenuItem>Profile</MenuItem>
        </MenuList>
      </Menu>
      </div>
    </header>
  )
}