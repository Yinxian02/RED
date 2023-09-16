import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateFundraiser extends Component {
  constructor(props) {
    super(props);

    this.onChangeFundraiserName = this.onChangeFundraiserName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);
    // this.onChangeInstagram = this.onChangeInstagram.bind(this);
    this.onChangeSignUp = this.onChangeSignUp.bind(this);
    this.onChangeAddToCalendar = this.onChangeAddToCalendar.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fundraiserName: '',
      date: new Date(),
      location: '',
      description: '',
      poster: '',
    //   instagram: '', 
      signUp: '', 
      addToCalendar: false, 
    }
  }

  onChangeFundraiserName(e) {
    this.setState({
      fundraiserName: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
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

  onChangePoster(e) {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      console.log(fileReader.result)
      this.setState({
        poster: fileReader.result,
      })
    };
    fileReader.onerror = (error) => {
      console.log(error)
    }
  }

//   onChangeInstagram(e) {
//     this.setState({
//       instagram: e.target.value
//     })
//   }

  onChangeSignUp(e) {
    this.setState({
      signUp: e.target.value
    })
  }

  onChangeAddToCalendar(e) {
    this.setState({
      addToCalendar: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const fundraiser = {
        fundraiserName: this.state.fundraiserName ,
        date: this.state.date ,
        location: this.state.location ,
        description: this.state.description ,
        poster: this.state.poster ,
        // instagram: this.state.instagram ,
        signUp: this.state.signUp ,
        addToCalendar: this.state.addToCalendar ,
    }

    console.log(fundraiser);

    axios.post('http://localhost:5001/fundraisers/add', fundraiser)
      .then(res => console.log(res.data));

    window.location = '/admin';
  }

  render() {
    return (
    <div>
      <h3>Create New Fundraiser Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Fundraiser Name: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.fundraiserName}
              onChange={this.onChangeFundraiserName}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
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
          <label>Poster: </label>
          <input 
              type="file" 
              accept=".jpeg, .png, .jpg"
              className="form-control"
              // value={this.state.picture}
              onChange={this.onChangePoster}
              />
        </div>

        {/* <div className="form-group">
          <label>Instagram: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.instagram}
              onChange={this.onChangeInstagram}
              />
        </div> */}

        <div className="form-group">
          <label>Sign Up: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.signUp}
              onChange={this.onChangeSignUp}
              />
        </div>

        <div className="form-group">
          <label>Add to Calendar: </label>
          <input 
              type="checkbox" 
              className="form-control"
              value={this.state.addToCalendar}
              onChange={this.onChangeAddToCalendar}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Fundraiser Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
