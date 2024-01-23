import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Intro } from './components/intro/Intro'
import Shop from './components/shop/Shop'
import Layout from './components/layout/Layout'

function App() {

   return (
      <div className="wrapper">
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Intro />} />
               <Route path='shop' element={<Shop />} />
            </Route>
         </Routes>
      </div>
   )
}

export default App
