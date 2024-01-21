import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Intro } from '../intro/Intro'
import Shop from '../shop/Shop'

function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='shop' element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App
