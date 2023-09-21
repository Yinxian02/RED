import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function CreateProject() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const { auth } = useContext(AuthContext);

  const [project, setProject] = useState({
      projectName: '',
      year: 0,
      location: '',
      description: '',
      picture: '',
      youtube: '', 
      report: ''
  }); 

  const onChangeProjectName = (e) => {
    setProject({...project,
      projectName: e.target.value
    })
  }

  const onChangeYear = (e) => {
    setProject({...project,
      year: e.target.value
    })
  }

  const onChangeLocation = (e) => {
    setProject({...project,
      location: e.target.value
    })
  }

  const onChangeDescription = (e) => {
    setProject({...project,
      description: e.target.value
    })
  }

  const onChangePicture = (e) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      console.log(fileReader.result)
      setProject({...project,
        picture: fileReader.result,
      })
    };
    fileReader.onerror = (error) => {
      console.log(error)
    }
  }

  const onChangeYoutube = (e) => {
    setProject({...project,
      youtube: e.target.value
    })
  }

  const onChangeReport = (e) => {
    setProject({...project,
      report: e.target.value
    })
  }


  const onSubmit = (e) => {
    e.preventDefault();

    axios.post(
      'http://localhost:5001/projects/add', 
      JSON.stringify({ project }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.accessToken,
        },
      }
      )
      .then(res => {
        console.log(res.data);
        navigate('/admin/projects-list', { replace: true });
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  }

return (
    <div>
      <h3>Create New Project Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Project Name: </label>
          <input type="text"
              required
              className="form-control"
              value={project.projectName}
              onChange={onChangeProjectName}
              />
        </div>

        <div className="form-group">
          <label>Year: </label>
          <input 
              type="text" 
              className="form-control"
              value={project.year}
              onChange={onChangeYear}
              />
        </div>

        <div className="form-group">
          <label>Location: </label>
          <input 
              type="text" 
              className="form-control"
              value={project.location}
              onChange={onChangeLocation}
              />
        </div>

        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={project.description}
              onChange={onChangeDescription}
              />
        </div>

        <div className="form-group">
          <label>Picture: </label>
          <input 
              type="file" 
              accept=".jpeg, .png, .jpg"
              className="form-control"
              // value={this.state.picture}
              onChange={onChangePicture}
              />
        </div>

        <div className="form-group">
          <label>Youtube: </label>
          <input 
              type="text" 
              className="form-control"
              value={project.youtube}
              onChange={onChangeYoutube}
              />
        </div>

        <div className="form-group">
          <label>Report: </label>
          <input 
              type="text" 
              className="form-control"
              value={project.report}
              onChange={onChangeReport}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Project Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
);
}


