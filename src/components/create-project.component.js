import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
    this.onChangeYoutube = this.onChangeYoutube.bind(this);
    this.onChangeReport = this.onChangeReport.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      projectName: '',
      year: 0,
      location: '',
      description: '',
      picture: '',
      youtube: '', 
      report: ''
    }
  }

  onChangeProjectName(e) {
    this.setState({
      projectName: e.target.value
    })
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangePicture(e) {
    this.setState({
      picture: e.target.value
    })
  }

  onChangeYoutube(e) {
    this.setState({
      youtube: e.target.value
    })
  }

  onChangeReport(e) {
    this.setState({
      report: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const project = {
      projectName: this.state.projectName ,
      year: this.state.year ,
      location: this.state.location ,
      description: this.state.description ,
      picture: this.state.picture ,
      youtube: this.state.youtube ,
      report: this.state.report ,
    }

    console.log(project);

    axios.post('http://localhost:5001/projects/add', project)
      .then(res => console.log(res.data));

    window.location = '/admin';
  }

  render() {
    return (
    <div>
      <h3>Create New Project Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Project Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.projectName}
              onChange={this.onChangeProjectName}
              />
        </div>

        <div className="form-group">
          <label>Year: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeYear}
              />
        </div>

        <div className="form-group">
          <label>Location: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              />
        </div>

        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <label>Picture: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.picture}
              onChange={this.onChangePicture}
              />
        </div>

        <div className="form-group">
          <label>Youtube: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.youtube}
              onChange={this.onChangeYoutube}
              />
        </div>

        <div className="form-group">
          <label>Report: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.report}
              onChange={this.onChangeReport}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Project Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}