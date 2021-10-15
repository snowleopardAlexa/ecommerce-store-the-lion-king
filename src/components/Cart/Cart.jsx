import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/icons';
import { classes } from 'istanbul-lib-coverage';

const Cart = () => {
    return (
        <div>
            <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            </Container>
        </div>
    )
}

export default Cart;
