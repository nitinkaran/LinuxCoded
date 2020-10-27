import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import history from '../../../../Redux/history';

const goToHomePage = () => {
  history.push('/');
};

const goToBackPage = () => {
  history.goBack();
};

const submitOrder = () => {
  history.push('/confirmation');
};

const renderBodySection = (cartItem) => {

  const { cartItemId, cartItemType, cartItemPrice, product } = cartItem;
  const { productName } = product;
    return (
      <div className="makeStyles-root-3" style={{ margin: '10px' }} >
        <Paper className="MuiPaper-root makeStyles-paper-4 MuiPaper-elevation1 MuiPaper-rounded" style={{ margin: 'auto', padding: '16px', width: '1000px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Item Name : {productName}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Item Type : {cartItemType}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Item Id : {cartItemId}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Can't Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Price : Rs {cartItemPrice}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
};

const renderAppBar = (Cart) => {
  const { cartItemList } = Cart;
  const itemsInCart = cartItemList.length;
  return (
    <AppBar position="static" >
      <Toolbar>
        <IconButton aria-label="notifications" color="inherit" onClick={() => goToBackPage()} >
          <Badge color="secondary">
            <ArrowBackIcon />
          </Badge>
        </IconButton>
        <Typography className="MuiTypography-root makeStyles-title-2 MuiTypography-h6 MuiTypography-noWrap" variant="h6" noWrap>
          Your Shopping Cart
        </Typography>
        <div className="makeStyles-grow-1" style={{ flexGrow: '1' }} />
        <IconButton aria-label="inherit" color="inherit" onClick={() => goToHomePage()} >
          <Badge color="secondary">
            Shop More
          </Badge>
        </IconButton>
        <Badge color="secondary" badgeContent={`${itemsInCart}`} >
          <ShoppingCartIcon />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

const renderBody = (Cart) => {
  const { cartItemList } = Cart;
  return cartItemList.map(item => renderBodySection(item));
};

const renderTotalSection = (Cart) => {
  const { shoppingCartTotalPrice } = Cart;
  return (
    <div className="makeStyles-root-3" style={{ margin: '10px' }} >
      <Paper className="MuiPaper-root makeStyles-paper-4 MuiPaper-elevation1 MuiPaper-rounded" style={{ margin: 'auto', padding: '16px', width: '1000px', background: 'darkturquoise' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="subtitle1">Total Price : </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Rs {shoppingCartTotalPrice}</Typography>
          </Grid>                
        </Grid>
      </Paper>
    </div>
  );
};

const renderCheckout = () => {
  return (
    <Button variant="contained" color="primary" onClick={() => submitOrder() } >
      Complete Order
    </Button>
  );
};

const CartItems = ({Cart}) => {
    return (
        <div className="makeStyles-grow-1">
            {renderAppBar(Cart)}
            {renderBody(Cart)}
            {renderTotalSection(Cart)}
            {renderCheckout()}
        </div>
    );
};

export default CartItems;