import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

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
            <div style={{width: '150px', height: '150px'}}>
                <Map google={this.props.google} zoom={16} initialCenter={position} style={{width: '100%', height: '100%', position: 'relative'}}>
                    <Marker position={position} />
                </Map>
            </div>
        );
    }
}

MapThumbnail.propTypes = {
    name: React.PropTypes.string,
    lat: React.PropTypes.number.isRequired,
    long: React.PropTypes.number.isRequired
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyA4YVNRt3DelbTrI_0SPbn00DCtG6kQfAc",
    language: 'he'
})(MapThumbnail);
