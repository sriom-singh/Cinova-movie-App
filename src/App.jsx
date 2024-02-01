import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'


const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-secondary flex">

      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
  )
}

export default App