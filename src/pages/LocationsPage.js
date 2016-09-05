import React from 'react';
import {connect} from 'react-redux';
import LocationList from '../components/LocationList';


const LocationsPage = (props) => {
    return (
        <div>
            <h1>My Locations</h1>
            <LocationList locations={props.locations}/>
        </div>
    );
};


function mapStateToProps(state) {
    return {
        locations: state.locations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);