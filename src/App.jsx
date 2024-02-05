import {Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Trending from './components/pages/Trending'
import Popular from './components/pages/Popular'
import Movies from './components/pages/Movies'
import TVshows from './components/pages/TVshows'
import People from './components/pages/People'


const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-secondary flex">

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/popular' element={<Popular/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tv' element={<TVshows/>}/>
          <Route path='/people' element={<People/>}/>
      </Routes>

    </div>
  )
}

export default App