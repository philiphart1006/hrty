// * Packages
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { removeToken } from '../utils/helpers/common'
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
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'

// * Styling & Images
import logoSq from '../assets/hrt_favi.png'

// * Retrieve user login details
const currentUser = localStorage.getItem('hrty-id')
const currentUserImage = localStorage.getItem('hrty-image')


// * Default function
export default function Header(){

  function handleClick(){
    removeToken()
  }

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
          {/* <Link to='/hardwares'>Equipment</Link>
          <Link to='/softwares'>Subscriptions</Link> */}
        </nav>
        {
          currentUserImage
          ?
          <div className='loggedIn'>
            <Link to={`/employees/${currentUser}/`}><img className='team-pic' src={ currentUserImage } alt='profile photo'/></Link>
          <button className ='logoutButton' onClick={handleClick}>
          <Link to={'/login/'}>Logoff</Link>
          </button>
          
          </div>
          :
          <Link to={'/login/'}>Login</Link>
        }
        
        <Menu className="header-ham narrow-mode">
        <MenuButton righticon={ChevronDownIcon} className='narrow-mode menu-button'
        px={4}
        py={2}
        transition='all 0.2s'
        borderRadius='md'
        borderWidth='1px'
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
        zIndex="dropdown"
        icon={<HamburgerIcon />}>
        <b>Menu</b>
          </MenuButton>
        <MenuList className='menu-list'>
          <MenuItem><Link to='/teams'>Teams</Link></MenuItem>
          <MenuItem><Link to='/employees'>Employees</Link></MenuItem>
          <MenuItem><Link to='/reviews'>Reviews</Link></MenuItem>
          <MenuItem><Link to='/reviews'>Reviews</Link></MenuItem>
          {/* <MenuItem>Equipment</MenuItem>
          <MenuItem>Subscriptions</MenuItem> */}
          {/* <MenuItem>Profile</MenuItem> */}
        </MenuList>
      </Menu>
      </div>
    </header>
  )
}