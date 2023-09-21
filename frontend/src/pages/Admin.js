import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
function Admin() {

  const Navigation = () => {
    return (
      <nav>

        {/* <NavLink to='exercises-list'>List of Exercises</NavLink>
        <NavLink to='create-exercise'>Create Exercise</NavLink> */}
  
        <NavLink to='projects-list'>List of Projects</NavLink>
        <NavLink to='create-project'>Create Project</NavLink>
  
        <NavLink to='fundraisers-list'>List of Fundraisers</NavLink>
        <NavLink to='create-fundraiser'>Create Fundraiser</NavLink>

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