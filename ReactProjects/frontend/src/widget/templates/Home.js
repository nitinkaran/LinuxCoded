import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import _isEmpty from 'lodash/isEmpty';
import { NavLink } from 'react-router-dom';

import { mapDispatchToProps, mapStateToProps } from '../Ecom.connect';
import FrontApi from '../../Api/FrontendApi';
import CarouselSelection from './CarouselSection';

class Home extends Component {

    componentDidMount() {
        const {getProductGroup} = this.props;
        FrontApi.getProductCategories()
        .then((response) => {
            getProductGroup(response.data);
        });
    }

    createNavItemLink(item) {
        let itemName = item.toLocaleLowerCase();
        let itemDisplay = item.charAt(0)+item.slice(1).toLowerCase();        
        return (
            <Nav.Item key={`${item}`}>
                <NavLink className="nav-link" to={`/${itemName}`}>{itemDisplay}</NavLink>
            </Nav.Item>
        );
    }

    createBaseNav(productGroupNames) {
        let keyName = !_isEmpty(productGroupNames) && productGroupNames[0].toLocaleLowerCase();
        return (
            <Navbar className="justify-content-center" sticky="top" bg="dark" variant="dark">
                <Nav className="justify-content-center" defaultActiveKey={`/${keyName}`}>
                    {productGroupNames.map((item) => {return this.createNavItemLink(item)})}
                </Nav>
            </Navbar>
        );
    }

    renderHeaderSection() {
        const { productGroupNames } = this.props;
        return this.createBaseNav(productGroupNames);
    }

    renderCarouselSection() {
        // to be implemented after adding the image in the backend
        return <CarouselSelection />;
    }

    // renderDealsSection() {
    //     to be implemented after adding the image in the backed
    // }

    render() {
        return (
            <div>
                {this.renderHeaderSection()}
                {this.renderCarouselSection()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);