import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/PastProjects.css'
import projectsList from '../components/ProjectsList.js'
import Project from '../components/Project.js'

const mapContainerStyle = {
  height: '500px',
  width: '100%'
};

const center = {
  lat: 6.378199159444044,
  lng: 116.77795510503549,
};

function PastProjects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleMapMarkerClick = (index) => {
    setSelectedProjectIndex(index);
  };

  const navigateLeft = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectsList.length - 1));
  };

  const navigateRight = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex < projectsList.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <>
    <div className='past-projects-div'>
      <div className='google-map-div'>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={8}
          >
            {projectsList.map((loc, index) => (
              <Marker 
                key={loc.id} 
                position={{ lat: loc.latitude, lng: loc.longitude }} 
                onClick={() => handleMapMarkerClick(index)}/>
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className='project-details-div'>
        <Project
          project={projectsList[selectedProjectIndex]}
          onPrev={navigateLeft}
          onNext={navigateRight}
        />
      </div>
    </div>
    </>
  );
}

export default PastProjects;