import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const locationClicked = (e) => {
    console.log(e.target.value);
};

const Location = () => {
    return (
        <ListGroupItem onClick={locationClicked}>Item 1</ListGroupItem>
    );
};

export default Location;
