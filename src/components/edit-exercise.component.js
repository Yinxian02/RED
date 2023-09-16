import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker'; // Make sure you have this import
import "react-datepicker/dist/react-datepicker.css";

function EditExercise() {
  const { id } = useParams();
  const [exercise, setExercise] = useState({
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
  });
//   const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/exercises/${id}`)
      .then((response) => {
        const data = response.data;
        setExercise({
          username: data.username,
          description: data.description,
          duration: data.duration,
          date: new Date(data.date),
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .get('http://localhost:5001/users/')
    //   .then((response) => {
    //     if (response.data.length > 0) {
    //       setUsers(response.data.map((user) => user.username));
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [id]);

//   const onChangeUsername = (e) => {
//     setExercise({ ...exercise, username: e.target.value });
//   };

  const onChangeDescription = (e) => {
    setExercise({ ...exercise, description: e.target.value });
  };

  const onChangeDuration = (e) => {
    setExercise({ ...exercise, duration: e.target.value });
  };

  const onChangeDate = (date) => {
    setExercise({ ...exercise, date });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedExercise = {
      username: exercise.username,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date,
    };

    console.log(updatedExercise);

    axios
      .post(`http://localhost:5001/exercises/update/${id}`, updatedExercise)
      .then((res) => console.log(res.data));

    window.location = '/admin';
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          {/* <select
            required
            className="form-control"
            value={exercise.username}
            onChange={onChangeUsername}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select> */}
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={exercise.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={exercise.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={exercise.date}
              onChange={onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditExercise;
