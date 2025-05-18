import '../styles/PastProjects.css'

// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const mapContainerStyle = {
//   height: '400px',
//   width: '100%'
// };

// const center = {
//   lat: 4.399068,
//   lng: 111.270459
// };

// const locations = [
//   { id: 1, lat: 7.170929408104118, lng: 117.51978289942377, name: 'Tadika Kami' },
// ];

function PastProjects() {
  return (
    <>
    {/* <div className='past-projects-div'>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={5}
        >
          {locations.map(loc => (
            <Marker key={loc.id} position={{ lat: loc.lat, lng: loc.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div> */}
    </>
  );
}

export default PastProjects;