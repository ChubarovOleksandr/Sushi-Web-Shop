import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Intro } from './components/intro/Intro'

function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Intro />} />
      </Routes>
    </div>
  )
}

export default App
