import './App.css'
import Home from './Pages/home'
import SignUp from './Pages/sign-up'
import SignIn from './Pages/sign-in'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
