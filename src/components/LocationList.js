import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import Location from '../components/Location'

const LocationList = (props) => {
    const locations = props.locations;
    const locationsListItems = locations.map( location => <ListGroupItem key={location.id}><Location {...location}/></ListGroupItem> );

    return (
        <ListGroup>
            {locationsListItems}
        </ListGroup>
    );
};

export default LocationList;
