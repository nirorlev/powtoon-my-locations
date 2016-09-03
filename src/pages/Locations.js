import React from 'react';
import {ListGroup} from 'react-bootstrap';
import Location from '../components/Location'

const Locations = () => {
    return (
        <div>
            <h1>My Locations</h1>
            <ListGroup>
                <Location>Item 1</Location>
                <Location>Item 2</Location>
                <Location>Item 3</Location>
            </ListGroup>
        </div>
    );
};

export default Locations;
