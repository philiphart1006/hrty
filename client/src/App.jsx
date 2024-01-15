// * Packages
import { Outlet, useNavigation} from 'react-router-dom'

// * Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

// * Function
function App() {
  const navigation = useNavigation()

// * JSX
  return (
    <>
      <Header/>
      <main>
        {
          navigation.state === 'idle'
          ?
          <Outlet />
          :
          <h2>
            Loading...
          </h2>
        }
      </main>
      <Footer/>
    </>
  )
}

export default App
