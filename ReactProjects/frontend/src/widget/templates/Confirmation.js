import React, { Component } from 'react';
import { connect } from "react-redux";
import _isEmpty from 'lodash/isEmpty';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import history from '../../Redux/history';
import FrontApi from '../../Api/FrontendApi';
import { mapStateToProps, mapDispatchToProps } from '../Ecom.connect';

class Confirmation extends Component {

    componentDidMount() {
        const { CartStore={}, saveShoppingCart } = this.props;
        const { Cart={} } = CartStore;
        const { shoppingCartId } = Cart;

        FrontApi.checkoutFromShoppingCart(shoppingCartId)
        .then( response => {
            saveShoppingCart(response.data);
        });
    }

    renderAppBar() {
        return (
            <AppBar position="static" >
                <Toolbar>
                    <Typography className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap" variant="h6" noWrap>
                        Your Order is confirmed
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }

    renderBodySection(Cart){

        const {shoppingCartId} = Cart;
        return (
            <div className="makeStyles-root-3" style={{ margin: '10px' }} >
                <Paper className="MuiPaper-root makeStyles-paper-4 MuiPaper-elevation1 MuiPaper-rounded" style={{ margin: 'auto', padding: '16px', width: '1000px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Thank you for shopping with us. Your order Id # : {shoppingCartId} preseve it for furture reference
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Your order is on the way to be delivered to you within 3-5 days.
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        You may be contacted by our customer support team to provide feedback for our service
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        We'd request you to please give feedback about your purchase experience with us. 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
          );
    }

    render() {

        const { CartStore={} } = this.props;
        const { Cart={} } = CartStore;

        if (_isEmpty(Cart)) {
            return null;
        }

        return (
            <div className="makeStyles-grow-1">
                {this.renderAppBar()}
                {this.renderBodySection(Cart)}
                <Button variant="contained" color="primary" onClick={() => history.push('/') } >
                    Shop Again
                </Button>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);