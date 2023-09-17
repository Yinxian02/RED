import React from 'react';
import {NavLink, Outlet, Routes, Route} from "react-router-dom";
import {useAuth} from '../components/auth'

function Admin() {
  const auth = useAuth()
  const Navigation = () => {
    return (
      <nav>
        <NavLink to='exercises-list'>List of Exercises</NavLink>
        <NavLink to='create-exercise'>Create Exercise</NavLink>
  
        <NavLink to='projects-list'>List of Projects</NavLink>
        <NavLink to='create-project'>Create Project</NavLink>
  
        <NavLink to='fundraisers-list'>List of Fundraisers</NavLink>
        <NavLink to='create-fundraiser'>Create Fundraiser</NavLink>
  
        {/* <NavLink to='create-user'>Create User</NavLink> */}
      </nav>
    );
  };

  return (
    <>
      <Navigation/>


      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Admin;