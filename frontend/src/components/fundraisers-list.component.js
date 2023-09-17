import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Fundraiser = props => (
  <tr>
    <td>{props.fundraiser.fundraiserName}</td>
    <td>{props.fundraiser.date.substring(0,10)}</td>
    <td>{props.fundraiser.location}</td>
    <td>{props.fundraiser.description}</td>
    <td><img width="100" src={props.fundraiser.poster} alt="error"/></td>
    <td>{props.fundraiser.signUp}</td>
    {/* <td>{props.fundraiser.addToCalendar}</td> */}
    <td>
      <Link to={"/admin/edit-fundraiser/"+props.fundraiser._id}>edit</Link> | <a href="#" onClick={() => { props.deleteFundraiser(props.fundraiser._id) }}>delete</a>
    </td>
  </tr>
)

export default class FundraisersList extends Component {
  constructor(props) {
    super(props);

    this.deleteFundraiser = this.deleteFundraiser.bind(this)

    this.state = {fundraisers: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/fundraisers/')
      .then(response => {
        this.setState({ fundraisers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteFundraiser(id) {
    axios.delete('http://localhost:5001/fundraisers/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      fundraisers: this.state.fundraisers.filter(el => el._id !== id)
    })
  }

  fundraisersList() {
    return this.state.fundraisers.map(currentfundraiser => {
      return <Fundraiser fundraiser={currentfundraiser} deleteFundraiser={this.deleteFundraiser} key={currentfundraiser._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Fundraisers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Fundraiser Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>Poster</th>
              <th>Sign Up</th>
              {/* <th>Add to Calendar</th> */}
            </tr>
          </thead>
          <tbody>
            { this.fundraisersList() }
          </tbody>
        </table>
      </div>
    )
  }
}