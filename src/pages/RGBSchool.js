import React from 'react'
import dinoCard from '../assets/red dino.png' 
import '../styles/RGBSchool.css'

class RGBSchool extends React.Component{
    constructor(props) {
        super(props);
        this.imgRef= React.createRef();
    }

    render(){
        return (
          <>
            <div className='dino-card-container'>
                <img src={dinoCard} className="dino-card" ref={this.imgRef} alt="dino-card" />
            </div>
          </>
        );
    }
}

export default RGBSchool;