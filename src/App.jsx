import {Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Trending from './components/pages/Trending'


const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-secondary flex">

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>}/>
      </Routes>

    </div>
  )
}

export default App