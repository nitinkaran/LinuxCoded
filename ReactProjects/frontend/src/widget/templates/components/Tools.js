import React, { Component } from 'react';
import { connect } from 'react-redux';
import _isEmpty from 'lodash/isEmpty';
import AppBar from '@material-ui/core/AppBar';
import { getArticleBasedOnType } from '../../../Redux/Reducer/FrontendSelector';
import { mapDispatchToProps } from '../../Ecom.connect';
import FrontApi from '../../../Api/FrontendApi';
import GenericItem from './GenericItem/GenericItem';
import history from '../../../Redux/history';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Badge from '@material-ui/core/Badge';


const mapStateToProps = (state) => {    
    const productsList = getArticleBasedOnType(state, "tools");
    return {
        productsList
    };
};

class Tools extends Component {

    componentDidMount() {
        const { getProducts } = this.props;
        FrontApi.getProducts()
        .then((response) => {
            getProducts(response.data);
        });
    }

    GenerateList() {
        const { productsList, getSelectedProductDetails } = this.props;
        const GenericItemProps = {productsList, getSelectedProductDetails};
        if (_isEmpty(productsList)) {
            return;
        }
        return <GenericItem GenericItemProps={GenericItemProps} />;
    }

    render() {
        return (
            <div className="makeStyles-grow-1">
                <AppBar position="static">                    
                    <Toolbar>
                        <IconButton aria-label="notifications" color="inherit" onClick={()=> history.goBack() } >
                            <Badge color="secondary">
                                <ArrowBackIcon />
                            </Badge>
                        </IconButton>
                        <Typography className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap" variant="h6" noWrap>
                            Tools Gallery
                        </Typography>
                    </Toolbar>                    
                </AppBar>
                {this.GenerateList()}
            </div>            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);