import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props, ...rest) => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{height: '100%', borderStyle: 'solid', borderWidth: '1', borderColor: '#cccccc' }} /> }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
      }
    />
  );
}

