import React from 'react';
import {NavLink, Outlet} from "react-router-dom";


function Admin() {
  return (
    <>
      <nav>
        <NavLink to='exercises-list'>List of Exercises</NavLink>
        <NavLink to='create-exercise'>Create Exercise </NavLink>
        <NavLink to='create-project'>Create Project</NavLink>
      </nav>

      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Admin;