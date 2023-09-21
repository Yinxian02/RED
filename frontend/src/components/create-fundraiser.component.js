import React, { useState, useContext } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function CreateFundraiser() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const { auth } = useContext(AuthContext);

  const [fundraiser, setFundraiser] = useState({
      fundraiserName: '',
      date: new Date(),
      location: '',
      description: '',
      poster: '',
      signUp: ''
  });
  

  const onChangeFundraiserName = (e) => {
    setFundraiser({...fundraiser,
      fundraiserName: e.target.value
    })
  }

  const onChangeDate = (date) => {
    setFundraiser({...fundraiser,
      date: date
    })
  }

  const onChangeLocation = (e) => {
    setFundraiser({...fundraiser,
      location: e.target.value
    })
  }

  const onChangeDescription = (e) => {
    setFundraiser({...fundraiser,
      description: e.target.value
    })
  }

  const onChangePoster = (e) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      console.log(fileReader.result)
      setFundraiser({...fundraiser,
        poster: fileReader.result,
      })
    };
    fileReader.onerror = (error) => {
      console.log(error)
    }
  }


  const onChangeSignUp = (e) => {
    setFundraiser({...fundraiser,
      signUp: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        'http://localhost:5001/fundraisers/add', 
      JSON.stringify({ fundraiser }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.accessToken,
        },
      }
      ).then(res => {
        console.log(res.data)
        navigate('/admin/fundraisers-list', { replace: true });
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  }

  
    return (
    <div>
      <h3>Create New Fundraiser Log</h3>
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
        </div>

        <div className="form-group">
          <input type="submit" value="Create Fundraiser Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }

