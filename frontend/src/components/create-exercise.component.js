// import React, { Component } from 'react';
// import axios from 'axios';
// import AuthContext from "../context/AuthContext";

// export default class CreateExercise extends Component {
//   static contextType = AuthContext;
//   constructor(props) {
//     super(props);
//     this.onChangeTitle = this.onChangeTitle.bind(this);
//     this.onChangeCreator = this.onChangeCreator.bind(this);
//     this.onChangeAge = this.onChangeAge.bind(this);
//     this.onChangeNumber = this.onChangeNumber.bind(this);
//     this.onChangeDurationHours = this.onChangeDurationHours.bind(this);
//     this.onChangeDurationMins = this.onChangeDurationMins.bind(this);
//     this.onChangeMaterials = this.onChangeMaterials.bind(this);
//     this.onChangeInstructions = this.onChangeInstructions.bind(this);
//     this.onChangeYoutube = this.onChangeYoutube.bind(this);
//     this.onChangePicture = this.onChangePicture.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       title: '',
//       creator: '',
//       age: '',
//       number: 0,
//       durationHours: 0,
//       durationMins: 0,
//       materials: [],
//       instructions: [],
//       youtube:'',
//       picture: '',
//     }
//   }

//   onChangeTitle(e) {
//     this.setState({
//       title: e.target.value
//     })
//   }

//   onChangeCreator(e) {
//     this.setState({
//       creator: e.target.value
//     })
//   }

//   onChangeAge(e) {
//     this.setState({
//       age: e.target.value
//     })
//   }

//   onChangeNumber(e) {
//     this.setState({
//       number: e.target.value
//     })
//   }

//   onChangeDurationHours(e) {
//     this.setState({
//       durationHours: e.target.value
//     })
//   }

//   onChangeDurationMins(e) {
//     this.setState({
//       durationMins: e.target.value
//     })
//   }

//   onChangeMaterials(e) {
//     this.setState({
//       materials: e.target.value
//     })
//   }

//   onChangeInstructions(e) {
//     this.setState({
//       instructions: e.target.value
//     })
//   }

//   onChangeYoutube(e) {
//     this.setState({
//       youtube: e.target.value
//     })
//   }

//   onChangePicture(e) {
//     var fileReader = new FileReader();
//     fileReader.readAsDataURL(e.target.files[0]);
//     fileReader.onload = () => {
//       console.log(fileReader.result)
//       this.setState({
//         picture: fileReader.result,
//       })
//     };
//     fileReader.onerror = (error) => {
//       console.log(error)
//     }
//   }

//   onSubmit(e) {
//     const {auth} = this.context; 
//     console.log(auth.roles)
//     const roles = auth.roles
//     e.preventDefault();

//     const exercise = {
//       title: this.state.title,
//       creator: this.state.creator,
//       age: this.state.age,
//       number: this.state.number,
//       durationHours: this.state.durationHours,
//       durationMins: this.state.durationMins,
//       materials: this.state.materials,
//       instructions: this.state.instructions,
//       youtube:this.state.youtube,
//       picture: this.state.picture,
//     }

//     console.log(exercise);


//     axios.post('http://localhost:5001/exercises/add',
//           JSON.stringify({ exercise }), {
//             headers: { 
//               'Content-Type': 'application/json' ,
//               Authorization: 'Bearer ' + this.context.auth.accessToken,
//             },
//           }
//       ).then(res => console.log(res.data));;

//     // window.location = '/admin';
//   }

//   render() {
//     return (
//     <div>
//       <h3>Create New Exercise Log</h3>
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group"> 
//           <label>Title: </label>
//           <input type="text"
//               required
//               className="form-control"
//               value={this.state.title}
//               onChange={this.onChangeTitle}
//               />
//         </div>
//         <div className="form-group"> 
//           <label>Creator: </label>
//           <input type="text"
//               required
//               className="form-control"
//               value={this.state.creator}
//               onChange={this.onChangeCreator}
//               />
//         </div>
//         <div className="form-group"> 
//           <label>Age: </label>
//           <input type="text"
//               required
//               className="form-control"
//               value={this.state.age}
//               onChange={this.onChangeAge}
//               />
//         </div>
//         <div className="form-group">
//           <label>Number of students: </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.number}
//               onChange={this.onChangeNumber}
//               />
//         </div>
//         <div className="form-group">
//           <label>Hours: </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.durationHours}
//               onChange={this.onChangeDurationHours}
//               />
//         </div>
//         <div className="form-group">
//           <label>Minutes: </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.durationMins}
//               onChange={this.onChangeDurationMins}
//               />
//         </div>

//         <div className="form-group">
//           <label>Materials: </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.materials}
//               onChange={this.onChangeMaterials}
//               />
//         </div>

//         <div className="form-group">
//           <label>Instructions: </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.instructions}
//               onChange={this.onChangeInstructions}
//               />
//         </div>

        
//         <div className="form-group">
//           <label>Youtube: </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.youtube}
//               onChange={this.onChangeYoutube}
//               />
//         </div>

//         <div className="form-group">
//           <label>Picture: </label>
//           <input 
//               type="file" 
//               accept=".jpeg, .png, .jpg"
//               className="form-control"
//               // value={this.state.picture}
//               onChange={this.onChangePicture}
//               />
//         </div>



//         <div className="form-group">
//           <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//     )
//   }
// }

import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

export default function CreateExercise() {
  const { auth } = useContext(AuthContext);

  const [exercise, setExercise] = useState({
    title: '',
    creator: '',
    age: '',
    number: 0,
    durationHours: 0,
    durationMins: 0,
    materials: '',
    instructions: '',
    youtube: '',
    picture: '',
  });

  const onChangeTitle = (e) => {
      setExercise({...exercise, 
        title: e.target.value
      })
    }
      
  const onChangeCreator = (e) =>{
      setExercise({...exercise, 
        creator: e.target.value
      })
  }
      
  const onChangeAge = (e) =>{
    setExercise({...exercise, 
      age: e.target.value
    })
  }
    
  const onChangeNumber = (e) =>{
    setExercise({...exercise, 
      number: e.target.value
    })
  }
    
  const onChangeDurationHours = (e) =>{
    setExercise({...exercise,
      durationHours: e.target.value
    })
  }
    
  const onChangeDurationMins = (e) =>{
    setExercise({...exercise,
      durationMins: e.target.value
    })
  }
    
  const onChangeMaterials = (e) =>{
    setExercise({...exercise,
      materials: e.target.value
    })
  }
    
  const onChangeInstructions = (e) =>{
    setExercise({...exercise,
      instructions: e.target.value
    })
  }
    
  const onChangeYoutube = (e) =>{
    setExercise({...exercise,
      youtube: e.target.value
    })
  }
    
  const onChangePicture = (e) =>{
        var fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
          console.log(fileReader.result)
          setExercise({...exercise,
            picture: fileReader.result,
          })
        };
        fileReader.onerror = (error) => {
          console.log(error)
        }
      }

  const onSubmit = (e) => {
    e.preventDefault();

    const roles = auth.roles;

    axios
      .post(
        'http://localhost:5001/exercises/add',
        JSON.stringify({ exercise }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth.accessToken,
          },
        }
      )
      .then((res) => console.log(res.data));

    // Redirect or perform any other necessary actions after the submission.
    // window.location = '/admin';
  };


  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
         <div className="form-group"> 
          <label>Title: </label>
          <input type="text"
              required
              className="form-control"
              value={exercise.title}
              onChange={onChangeTitle}
              />
        </div>
        <div className="form-group"> 
          <label>Creator: </label>
          <input type="text"
              required
              className="form-control"
              value={exercise.creator}
              onChange={onChangeCreator}
              />
        </div>
        <div className="form-group"> 
          <label>Age: </label>
          <input type="text"
              required
              className="form-control"
              value={exercise.age}
              onChange={onChangeAge}
              />
        </div>
        <div className="form-group">
          <label>Number of students: </label>
          <input 
              type="text" 
              className="form-control"
              value={exercise.number}
              onChange={onChangeNumber}
              />
        </div>
        <div className="form-group">
          <label>Hours: </label>
          <input 
              type="text" 
              className="form-control"
              value={exercise.durationHours}
              onChange={onChangeDurationHours}
              />
        </div>
        <div className="form-group">
          <label>Minutes: </label>
          <input 
              type="text" 
              className="form-control"
              value={exercise.durationMins}
              onChange={onChangeDurationMins}
              />
        </div>

        <div className="form-group">
          <label>Materials: </label>
          <input 
              type="text" 
              className="form-control"
              value={exercise.materials}
              onChange={onChangeMaterials}
              />
        </div>

        <div className="form-group">
          <label>Instructions: </label>
          <input 
              type="text" 
              className="form-control"
              value={exercise.instructions}
              onChange={onChangeInstructions}
              />
        </div>

        
        <div className="form-group">
          <label>Youtube: </label>
          <input 
              type="text" 
              className="form-control"
              value={exercise.youtube}
              onChange={onChangeYoutube}
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
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}