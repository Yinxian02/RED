import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/PastProjects.css'
import projectsList from '../components/ProjectsList.js'


const mapContainerStyle = {
  height: '500px',
  width: '100%'
};

const center = {
  lat: 6.378199159444044,
  lng: 116.77795510503549,
};

function PastProjects() {
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
            {projectsList.map(loc => (
              <Marker key={loc.id} position={{ lat: loc.latitude, lng: loc.longitude }} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className='project-details-div'>

      </div>
    </div>
    </>
  );
}

export default PastProjects;