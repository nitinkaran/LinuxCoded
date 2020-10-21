import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import _isEmpty from 'lodash/isEmpty';

import { mapDispatchToProps, mapStateToProps } from '../../Ecom.connect';
import FrontApi from '../../../Api/FrontendApi';
import CarouselSelection from '../CarouselSection';

class Home extends Component {

    componentDidMount() {
        const {getProductGroup, getProducts} = this.props;
        FrontApi.getProductCategories()
        .then((response) => {
            getProductGroup(response.data);
        });

        FrontApi.getProducts()
        .then((res) => {
            getProducts(res.data);
        });
    }

    createNavItemLink(item) {
        let itemName = item.toLocaleLowerCase();
        return <Nav.Item key={`${item}`}><Nav.Link href={`${itemName}`}>{item}</Nav.Link></Nav.Item>;
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
        return <CarouselSelection />
    }

    // renderDealsSection() {
    //     to be implemented after adding the image in the backed
    // }

    render() {
        const { productGroupNames } = this.props;
        console.log(productGroupNames);
        return (
            <div>
                {this.renderHeaderSection()}
                {this.renderCarouselSection()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);