import React from 'react';
import {Panel, Grid, Row, Col} from 'react-bootstrap';
import Category from './Category';
import Coordinates from './Coordinates';
import MapThumbnail from './MapThumbnail';


class Location extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name, address, coordinates, categoryName, ...panelProps } = this.props;
        return (
            <Panel {...panelProps} header={name}>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={8}>
                            <p>Address: {address}</p>
                            <p>Coordinates: <Coordinates {...coordinates} /></p>
                            <p>Category: <Category name={categoryName}/></p>
                        </Col>
                        <Col xsHidden sm={4}>
                            <MapThumbnail lat={coordinates.lat} long={coordinates.long}/>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
        );
    }
}

Location.defaultProps = {
    name: "PowToon Office",
    address: "Ha'arbaa st. Tel-Aviv",
    coordinates: {lat: 32.070378, long: 34.783351},   // Powtoon coordinates :)
    categoryName: "Daily route"
};

Location.propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    coordinates: React.PropTypes.objectOf(React.PropTypes.number).isRequired,
    categoryName: React.PropTypes.string.isRequired,
};

export default Location;
