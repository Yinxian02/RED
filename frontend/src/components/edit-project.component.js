import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import validator from 'validator'

function EditProject() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const validateYT = (value) => {
    
    if (validator.isURL(value)) {
      setYTErrorMessage('')
    } else {
      setYTErrorMessage('Invalid URL')
    }
  }

  const validateReport = (value) => {
    
    if (validator.isURL(value)) {
      setReportErrorMessage('')
    } else {
      setReportErrorMessage('Invalid URL')
    }
  }

  const [ytErrorMessage, setYTErrorMessage] = useState('')
  const [reportErrorMessage, setReportErrorMessage] = useState('')

  const { id } = useParams();
  const [project, setProject] = useState({
    projectName: '',
    year: 0,
    location: '',
    description: '',
    picture: '',
    youtube: '', 
    report: ''
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5001/projects/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.accessToken,
          },
        })
      .then((response) => {
        const data = response.data;
        setProject({
            projectName: data.projectName,
            year: data.year ,
            location: data.location ,
            description: data.description ,
            picture: data.picture ,
            youtube: data.youtube, 
            report: data.report
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  const onChangeProjectName = (e) => {
    setProject({ ...project, projectName: e.target.value });
  };

  const onChangeYear = (e) => {
    setProject({ ...project, year: e.target.value });
  };

  const onChangeLocation = (e) => {
    setProject({ ...project, location: e.target.value });
  };

  const onChangeDescription = (e) => {
    setProject({ ...project, description: e.target.value });
  };

  const onChangePicture = (e) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      console.log(fileReader.result)
      setProject({ ...project, picture: fileReader.result });
    };
    fileReader.onerror = (error) => {
      console.log(error)
    }
  };

  const onChangeYoutube = (e) => {
    validateYT(e.target.value); 
    setProject({ ...project, youtube: e.target.value });
  };

  const onChangeReport = (e) => {
    validateReport(e.target.value);
    setProject({ ...project, report: e.target.value });
  };

  

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedProject = {
      projectName: project.projectName,
      year: project.year,
      location: project.location,
      description: project.description,
      picture: project.picture,
      youtube: project.youtube,
      report: project.report
    };

    console.log(updatedProject);

    axios
      .post(`http://localhost:5001/projects/update/${id}`, 
      updatedProject,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate('/admin/projects-list', { replace: true });
      });
  };

  return (
    <div>
      <h3>Edit Project Log</h3>
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
              <span style={{
              fontWeight: 'bold',
              color: 'red',
              }}>{ytErrorMessage}</span>
        </div>

        <div className="form-group">
          <label>Report: </label>
          <input 
              type="text" 
              className="form-control"
              value={project.report}
              onChange={onChangeReport}
              />
              <span style={{
              fontWeight: 'bold',
              color: 'red',
              }}>{reportErrorMessage}</span>
        </div>

        

        <div className="form-group">
          <input
            type="submit"
            value="Edit Project Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditProject;
