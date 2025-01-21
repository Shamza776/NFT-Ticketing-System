import './App.css'
import Home from './Pages/home'
import SignUpAdmin from './Pages/sign-upAdmin'
import SignUpUser from './Pages/sign-upUser'
import SignIn from './Pages/sign-in'
import Dashboard from './Pages/Admin/dashboard1'
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'


function App() {
  return(
    <Router>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-upAdmin' element={<SignUpAdmin />} />
        <Route path='/sign-upUser' element={<SignUpUser />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/Admin/dashboard1' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
