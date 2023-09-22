import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker'; // Make sure you have this import
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from '../context/AuthContext';
import validator from 'validator'

function EditFundraiser() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const validateSignUp = (value) => {
    
    if (validator.isURL(value)) {
      setErrorMessage('')
    } else {
      setErrorMessage('Invalid URL')
    }
  }

  const [errorMessage, setErrorMessage] = useState('')
  const { id } = useParams();
  const [fundraiser, setFundraiser] = useState({
    fundraiserName: '',
    date: new Date(),
    location: '',
    description: '',
    poster: '',
    signUp: '', 
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5001/fundraisers/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.accessToken,
        },
      })
      .then((response) => {
        const data = response.data;
        setFundraiser({
          fundraiserName: data.fundraiserName ,
          date: new Date(data.date) ,
          location: data.location ,
          description: data.description ,
          poster: data.poster ,
          signUp: data.signUp 
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onChangeFundraiserName = (e) => {
    setFundraiser({ ...fundraiser, fundraiserName: e.target.value });
  };

  const onChangeDate = (date) => {
    setFundraiser({ ...fundraiser, date });
  };

  const onChangeLocation = (e) => {
    setFundraiser({ ...fundraiser, location: e.target.value });
  };

  const onChangeDescription = (e) => {
    setFundraiser({ ...fundraiser, description: e.target.value });
  };

  const onChangePoster = (e) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      console.log(fileReader.result)
      setFundraiser({ ...fundraiser, poster: fileReader.result });
    };
    fileReader.onerror = (error) => {
      console.log(error)
    }
  };

  const onChangeSignUp = (e) => {
    validateSignUp(e.target.value);
    setFundraiser({ ...fundraiser, signUp: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedFundraiser = {
      fundraiserName: fundraiser.fundraiserName ,
      date: fundraiser.date ,
      location: fundraiser.location ,
      description: fundraiser.description ,
      poster: fundraiser.poster ,
      signUp: fundraiser.signUp ,
    };

    console.log(updatedFundraiser);

    axios
      .post(`http://localhost:5001/fundraisers/update/${id}`, 
      updatedFundraiser,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.accessToken,
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate('/admin/fundraisers-list', { replace: true });
      });
  };

  return (
    <div>
      <h3>Edit Fundraiser Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Fundraiser Name: </label>
          <input type="text"
              required
              className="form-control"
              value={fundraiser.fundraiserName}
              onChange={onChangeFundraiserName}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={fundraiser.date}
              onChange={onChangeDate}
            />
          </div>
        </div>


        <div className="form-group">
          <label>Location: </label>
          <input 
              type="text" 
              className="form-control"
              value={fundraiser.location}
              onChange={onChangeLocation}
              />
        </div>

        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={fundraiser.description}
              onChange={onChangeDescription}
              />
        </div>

        <div className="form-group">
          <label>Poster: </label>
          <input 
              type="file" 
              accept=".jpeg, .png, .jpg"
              className="form-control"
              // value={this.state.picture}
              onChange={onChangePoster}
              />
        </div>

        <div className="form-group">
          <label>Sign Up: </label>
          <input 
              type="text" 
              className="form-control"
              value={fundraiser.signUp}
              onChange={onChangeSignUp}
              />
              <span style={{
              fontWeight: 'bold',
              color: 'red',
              }}>{errorMessage}</span>
        </div>

        

        <div className="form-group">
          <input
            type="submit"
            value="Edit Fundraiser Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditFundraiser;
