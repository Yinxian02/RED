import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Admin() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  const Navigation = () => {
    return (
      <nav>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}

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