import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/icons';

import useStyles from './styles';

const Cart = ({ cart }) => {

    const isEmpty = !cart.line_items.length;
    const classes = useStyles();

    const EmptyCart = () => {
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    }

    const filledCart = () => {
        <>
          <Grid container spacing={3}>
             {cart.line_items.EmptyCart((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                   <div>{item.name}</div>
                </Grid>
             ))}
          </Grid>
          <div className={classes.cardDetails}>
              <Typography variant="h4">
                  Subtotal: { cart.subtotal.formatted_with_symbol}
              </Typography>
              <div>
                  <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                  <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout Cart</Button>
              </div>
          </div>
        </>
    }

    return (
        <div>
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
                { isEmpty ? <EmptyCart /> : <FilledCart /> }
            </Container>
        </div>
    )
}

export default Cart;
