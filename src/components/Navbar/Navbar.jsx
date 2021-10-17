import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import logo from '../../assets/lion-facing-right.png'
import useStyles from './styles';

const Navbar = ({ totalItems }) => {

    const classes = useStyles();

    return (
        <>
          <AppBar position="fixed" className={classes.AppBar} color="inherit">
              <Toolbar>
                  <Typography variant="h6" className={classes.AppBar} color="inherit">
                      <img src={logo} alt="The Lion King Store" height="25px" className={classes.image} />
                      The Lion King Store
                  </Typography>
                  <div className={classes.grow} />
                  <div className={classes.button}>
                      <Link to="/cart">go to cart</Link>
                      <IconButton aria-label="show cart items" color="inherit">
                          <Badge badgeContent={totalItems} color="secondary">
                              <ShoppingCart />
                          </Badge>
                      </IconButton>
                  </div>
              </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar;
