// * Packages
import { Outlet, useNavigation} from 'react-router-dom'

// * Components

// * Function
function App() {
  const navigation = useNavigation()

// * JSX
  return (
    <>
      <h1>HRTy</h1>
      <main>
        {
          navigation.state === 'idle'
          ?
          <Outley />
          :
          <h2>
            Loading...
          </h2>
        }
      </main>
    </>
  )
}

export default App
