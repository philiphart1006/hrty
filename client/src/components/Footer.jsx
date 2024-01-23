// * Packages
import { Link } from 'react-router-dom'

// * Styling & Images
import logoGH from '../assets/github.png'
import logoLI from '../assets/linkedin.png'
import logoBug from '../assets/insect_icon.png'

// * Default function
export default function Footer(){

  return(
    <footer>
      <div className='footerLHS'>
      <img className='logo-icon bug-logo wide-mode' src={logoBug} alt='bug logo'/>
      <a href='https://github.com/philiphart1006' target="_blank" rel="noreferrer noopener" className='wide-mode'>Report a bug here</a>
      </div>
      <div className='footerRHS'>
      <p className='wide-mode'>A Code with Hart Production</p>
      
      <a href='https://forms.gle/xKUyRKjqf65WYJg87' target="_blank" rel="noreferrer noopener"><img className='logo-icon narrow-mode' src={logoBug} alt='bug logo'/></a>
      <a href='https://github.com/philiphart1006' target="_blank" rel="noreferrer noopener"><img className='logo-icon' src={logoGH} alt='github logo'/></a>
      <a href='https://www.linkedin.com/in/philiphart1006/' target="_blank" rel="noreferrer noopener"><img className='logo-icon' src={logoLI} alt='linkedin logo'/></a>
      </div>
    </footer>
  )
}