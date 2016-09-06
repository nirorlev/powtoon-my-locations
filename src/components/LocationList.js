import React from 'react';
import {Accordion, Panel} from 'react-bootstrap';
import Location from '../components/Location'

class LocationList extends React.Component {
    constructor(props) {
        super(props);
        this.handleLocationSelected = this.handleLocationSelected.bind(this);
        this.getLocationById = this.getLocationById.bind(this);
    }

    getLocationById(locationId) {
        return this.props.locations.find((location) => location.id === locationId);
    }

    getCategoryById(categoryId) {
        return this.props.categories.find((category) => category.id === categoryId);
    }

    handleLocationSelected(locationId) {
        this.props.clickHandler(this.getLocationById(locationId));
    }

    render() {
        const {locations, categories, selectedLocation} = this.props;

        const activeKey = selectedLocation ? {activeKey: selectedLocation.id} : {activeKey: "-1"};

        const sortedLocations = [...locations].sort( (a,b) => (a.name).localeCompare(b.name) );

        const locationsListItems = sortedLocations.map(location => {
                const activeState = location === selectedLocation ? {bsStyle: "primary"} : {};
                const category = this.getCategoryById(location.categoryId);
                return (<Location key={location.id}
                                  eventKey={location.id}
                                  {...activeState}
                                  {...location}
                                  category={category}
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
