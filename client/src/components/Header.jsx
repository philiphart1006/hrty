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

// * Default function
export default function Header(){

  return(
    <header>
      <div className='lhs'>
        <img className='logo-icon' src={logoSq} alt='hrty logo'/>
        <p>HRTy</p>
        <p className="wide-mode"> - People Ops with Heart</p>
      </div>
      <nav className="header-nav wide-mode">
        <Link to='/teams'>Teams</Link>
        <Link to='/employees'>Employees</Link>
        <Link to='/hardware'>Equipment</Link>
        <Link to='/software'>Subscriptions</Link>
      </nav>
      <Menu className="header-ham narrow-mode">
        <MenuButton rightIcon={ChevronDownIcon} className='narrow-mode'>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Teams</MenuItem>
          <MenuItem>Employees</MenuItem>
          <MenuItem>Equipment</MenuItem>
          <MenuItem>Subscriptions</MenuItem>
          <MenuItem>Profile</MenuItem>
        </MenuList>
      </Menu>
    </header>
  )
}