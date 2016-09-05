import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Category from './Category';
import Coordinates from './Coordinates';
import MapThumbnail from './MapThumbnail';


class Location extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.onSelect(this.props.id)} >
                <h3>{this.props.name}</h3>
                <Grid>
                    <Row>
                        <Col xs={12} sm={8}>
                            <p>Address: {this.props.address}</p>
                            <p>Coordinates: <Coordinates {...this.props.coordinates} /></p>
                            <p>Category: <Category name={this.props.categoryName} /></p>
                        </Col>
                        <Col xs={12} sm={4}>
                            MAP
                            <MapThumbnail lat={this.props.coordinates.lat} long={this.props.coordinates.long} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Location.defaultProps = {
    name: "PowToon Office",
    address: "Ha'arbaa st. Tel-Aviv",
    coordinates: { lat: 32.070378, long: 34.783351 },   // Powtoon coordinates :)
    categoryName: "Daily route"
};

Location.propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    coordinates: React.PropTypes.objectOf(React.PropTypes.number).isRequired,
    categoryName: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func
};

export default Location;
