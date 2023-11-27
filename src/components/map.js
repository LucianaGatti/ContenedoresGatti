// GoogleMap.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '50vh',
    width: '80%',
  };

  const mapContainerStyles = {
    height: '50vh',
    width: '100%', // Ancho completo en pantallas grandes, ajusta según sea necesario
    maxWidth: '600px', // Máximo ancho en pantallas pequeñas
    margin: '0 auto', // Centrar en pantallas pequeñas
  };

  const defaultCenter = {
    lat: -31.353745,
    lng: -64.172123,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDy__TScfwHhvL_lqcUuWaffwCawdWMSng">
      <GoogleMap
        mapContainerStyle={mapContainerStyles}
        zoom={18}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

