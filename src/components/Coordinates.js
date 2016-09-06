import React from 'react';

const Coordinates = (props) => {
    return (
        <span>
            ({(props.lat).toFixed(5)} Lat / {(props.long).toFixed(5)} Long)
        </span>
    );
};

Coordinates.propTypes = {
    lat: React.PropTypes.number.isRequired,
    long: React.PropTypes.number.isRequired
};

export default Coordinates;
