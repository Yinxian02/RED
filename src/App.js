import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PastProjects from './pages/PastProjects'
import Fundraisers from './pages/Fundraisers'
import RGBSchool from './pages/RGBSchool'
import JoinUs from './pages/JoinUs'
import FollowUs from './pages/FollowUs'
import Admin from './pages/Admin'
// import ProjectsList from './components/projects-list.component'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/past-projects' element={<PastProjects/>}/>
          <Route path='/fundraisers' element={<Fundraisers/>}/>
          <Route path='/rgb-school' element={<RGBSchool/>}/>
          <Route path='/join-us' element={<JoinUs/>}/>
          <Route path='/follow-us' element={<FollowUs/>}/>
          <Route path='/admin' element={<Admin/>}>
          </Route> 
        </Routes>      
      </Router>
    </>
  );
}

export default App;
