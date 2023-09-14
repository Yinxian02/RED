import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Project = props => (
  <tr>
    <td>{props.project.projectName}</td>
    <td>{props.project.year}</td>
    <td>{props.project.location}</td>
    <td>{props.project.description}</td>
    <td>{props.project.picture}</td>
    <td>{props.project.youtube}</td>
    <td>{props.project.report}</td>
    <td>
      <Link to={"/edit/"+props.project._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProject(props.project._id) }}>delete</a>
    </td>
  </tr>
)

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this)

    this.state = {projects: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/projects/')
      .then(response => {
        this.setState({ projects: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProject(id) {
    axios.delete('http://localhost:5000/projects/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      projects: this.state.projects.filter(el => el._id !== id)
    })
  }

  projectList() {
    return this.state.projects.map(currentproject => {
      return <Project project={currentproject} deleteProject={this.deleteProject} key={currentproject._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Projects</h3>
      </div>
    )
  }
}