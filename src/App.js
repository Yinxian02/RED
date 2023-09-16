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

import ExercisesList from './components/exercises-list.component'
import CreateExercise from './components/create-exercise.component'
import EditExercise from './components/edit-exercise.component'

import ProjectsList from './components/projects-list.component'
import CreateProject from './components/create-project.component'
import EditProject from './components/edit-project.component'

import FundraisersList from './components/fundraisers-list.component'
import CreateFundraiser from './components/create-fundraiser.component'

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
            <Route path='exercises-list' element={<ExercisesList/>}/> 
            <Route path='create-exercise' element={<CreateExercise/>}/> 
            <Route path='projects-list' element={<ProjectsList/>}/> 
            <Route path='create-project' element={<CreateProject/>}/> 
            <Route path='fundraisers-list' element={<FundraisersList/>}/> 
            <Route path='create-fundraiser' element={<CreateFundraiser/>}/> 
          </Route> 
          <Route path= '/admin/edit-exercise/:id' element={<EditExercise/>} />
          <Route path= '/admin/edit-project/:id' element={<EditProject/>} />
        </Routes>      
      </Router>
    </>
  );
}

export default App;
