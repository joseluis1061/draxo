import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = ({latitude, longitude}) => {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude)
  };
  return (
    <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_KEY}`}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter}></Marker>
      </GoogleMap>
    </LoadScript>
  )
}

export default Maps;