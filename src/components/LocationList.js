import React from 'react';
import {Accordion, Panel} from 'react-bootstrap';
import Location from '../components/Location'

class LocationList extends React.Component {
    constructor(props) {
        super(props);
        this.handleLocationSelected = this.handleLocationSelected.bind(this);
    }

    handleLocationSelected(locationId) {
        const location = this.props.locations.find((location) => location.id === locationId);
        this.props.clickHandler(location);
    }

    render() {
        const {locations, selectedLocation} = this.props;

        const activeKey = selectedLocation ? {activeKey: selectedLocation.id} : {activeKey: "-1"};

        const locationsListItems = locations.map(location => {
                const activeState = location === selectedLocation ? {bsStyle: "primary"} : {};
                return (<Location key={location.id}
                                  eventKey={location.id}
                                  {...activeState}
                                  {...location}
                />);
            }
        );

        return (
            <Accordion {...activeKey} onSelect={this.handleLocationSelected}>
                {locationsListItems}
            </Accordion>
        );
    }
}

export default LocationList;
