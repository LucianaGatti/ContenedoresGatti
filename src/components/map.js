// GoogleMap.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '50vh',
    width: '80%',
  };

  const defaultCenter = {
    lat: -31.353745, 
    lng: -64.172123, 
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDy__TScfwHhvL_lqcUuWaffwCawdWMSng">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={18}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
