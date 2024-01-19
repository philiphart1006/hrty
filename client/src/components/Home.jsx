// * Packages


// * Styling & Images
import atkinsonInc from '../assets/atkinsoninc.png'

// * Default function
export default function Home(){

  return(
    <section className='homepage'>
      <section className='homepageLHS'>
        <p>Review someone</p>
        <p>Track company assets</p>
      </section>
      <section className='homepageCentre'>
        <h1>Welcome to Atkin & Son Inc.</h1>
        <p><em>No funny business, please.</em></p>
        <img className='cover-pic' src={atkinsonInc} alt='atkinson inc photo'/>
        <h1>Powered by HRTy - People Ops with Heart</h1>
      </section>
      <section className='homepageRHS'>
        <p>Track logins</p>
        <p>Who's who?</p>
      </section>
    </section>
  )
}