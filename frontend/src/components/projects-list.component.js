import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AuthContext from "../context/AuthContext";

const Project = props => (
  <tr>
    <td>{props.project.projectName}</td>
    <td>{props.project.year}</td>
    <td>{props.project.location}</td>
    <td>{props.project.description}</td>
    <td><img width="100" src={props.project.picture} alt="error"/></td>
    <td>{props.project.youtube}</td>
    <td>{props.project.report}</td>
    <td>
      <Link to={"/admin/edit-project/"+props.project._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProject(props.project._id) }}>delete</a>
    </td>
  </tr>
)

export default class ProjectsList extends Component {
  static contextType = AuthContext;
  
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this)

    this.state = {projects: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/projects/', {
      headers: {
        Authorization: 'Bearer ' + this.context.auth.accessToken,
        } 
    })
      .then(response => {
        this.setState({ projects: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProject(id) {
    axios.delete('http://localhost:5001/projects/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      projects: this.state.projects.filter(el => el._id !== id)
    })
  }

  projectsList() {
    return this.state.projects.map(currentproject => {
      return <Project project={currentproject} deleteProject={this.deleteProject} key={currentproject._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Projects</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Project Name</th>
              <th>Year</th>
              <th>Location</th>
              <th>Description</th>
              <th>Picture</th>
              <th>Youtube</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            { this.projectsList() }
          </tbody>
        </table>
      </div>
    )
  }
}