import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route,Routes,Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'




const App = () => {

  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App