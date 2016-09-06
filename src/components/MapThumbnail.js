import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';


class MapThumbnail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const position = {
            lat: this.props.lat,
            lng: this.props.long
        };

        return (
            <GoogleMapLoader
                containerElement={
                    <div style={{height: `120px`, width: '120px'}} />
                }
                googleMapElement={
                    <GoogleMap defaultZoom={16} defaultCenter={position} > 
                        <Marker position={position} key={this.props.name} defaultAnimation="2" />
                    </GoogleMap>
                }
            />
        );
    }
}

MapThumbnail.propTypes = {
    name: React.PropTypes.string,
    lat: React.PropTypes.number.isRequired,
    long: React.PropTypes.number.isRequired
};

export default MapThumbnail;
