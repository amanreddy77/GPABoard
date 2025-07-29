import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import SupportCenter from './pages/SupportCenter'
import Assignments from './pages/Assignments'
import Cgpa from './pages/Cgpa'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cgpa" element={<Cgpa />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/support-center" element={<SupportCenter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
