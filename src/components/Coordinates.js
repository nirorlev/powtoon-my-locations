import React from 'react';

const Coordinates = (props) => {
    return (
        <span>({props.lat} Lat / {props.long} Long)</span>
    );
};

Coordinates.propTypes = {
    lat: React.PropTypes.number.isRequired,
    long: React.PropTypes.number.isRequired
};

export default Coordinates;
