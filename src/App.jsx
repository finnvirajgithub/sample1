import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Destination from './routes/Destinations'
import Contact from './routes/Contact'
import Services from './routes/Services'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destinations' element={<Destination />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
