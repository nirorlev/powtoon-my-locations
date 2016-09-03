import React, {PropTypes} from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';

const App = (props) => {
    return (
        <div>
            { props.children }

            <Navbar fixedBottom fluid>
                <Nav bsStyle="pills">
                    <IndexLinkContainer to="/">
                        <NavItem className="btn btn-default navbar-btn">
                            <Glyphicon glyph="map-marker"/>
                            <span className="sr-only">Locations</span>
                        </NavItem>
                    </IndexLinkContainer>
                    <LinkContainer to="/categories">
                        <NavItem className="btn btn-default navbar-btn">
                            <Glyphicon glyph="list"/>
                            <span className="sr-only">Categories</span>
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
