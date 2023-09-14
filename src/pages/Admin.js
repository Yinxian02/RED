import React from 'react';
import Navbar from '../components/Navbar'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import ProjectsList from "../components/projects-list.component";
// import EditProject from "./components/edit-project.component";
// import CreateProject from "../components/create-project.component";

function Admin() {
  return (
    <>
      {/* <Link to="projectsList">Projects List</Link> */}
      <Routes>
        <Route path='/' element={<ProjectsList/>} />
      </Routes>
    </>
  );
}

export default Admin;