import React from 'react';
import {Panel, Grid, Row, Col} from 'react-bootstrap';
import Category from './Category';
import Coordinates from './Coordinates';


class Location extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name, address, coordinates, categoryId, category, ...panelProps } = this.props;
        return (
            <Panel {...panelProps} header={name}>
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <p>Address: {address}</p>
                            <p>Coordinates: <Coordinates {...coordinates} /></p>
                            <p>Category: { category ? <Category {...category} /> : "<Not Available>" }</p>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
        );
    }
}

Location.propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    coordinates: React.PropTypes.objectOf(React.PropTypes.number).isRequired,
    categoryId: React.PropTypes.string,
    category: React.PropTypes.object.isRequired,
};

export default Location;
