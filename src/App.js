import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Upcoming from './components/Upcoming'
import PastProjects from './components/PastProjects'
import Fundraisers from './components/Fundraisers'
import JoinUs from './components/JoinUs'
import Donate from './components/Donate'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/upcoming' element={<Upcoming/>}/>
        <Route path='/pastprojects' element={<PastProjects/>}/>
        <Route path='/fundraisers' element={<Fundraisers/>}/>
        <Route path='/joinus' element={<JoinUs/>}/>
        <Route path='/donate' element={<Donate/>}/>
      </Routes>      
    </>
  );
}

export default App;
