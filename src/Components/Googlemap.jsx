import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 19.775576,
      lng: -70.4492
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80%', width: '80%', paddingBottom: '180px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBfmumQU9Q5W6k4378ZP6z1CgRCX9yhyyQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            title={''}
            name={'Surf Blue Caberete'}
            position={{ lat: 19.7752, lng: -70.44916 }}
          />
          <AnyReactComponent
            lat={19.777594}
            lng={-70.447615}
            text={'Surf Blue Caberete'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
