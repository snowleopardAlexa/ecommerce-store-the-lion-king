import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/lion-facing-right.png'
import useStyles from './styles';

const Navbar = ({ totalItems }) => {

    const classes = useStyles();
    const location = useLocation();

    if (location.pathname === '/')

    return (
        <>
          <AppBar position="fixed" className={classes.AppBar} color="inherit">
              <Toolbar>
                  <Typography component={Link} to="/" variant="h6" className={classes.AppBar} color="inherit">
                      <img src={logo} alt="The Lion King Store" height="25px" className={classes.image} />
                      The Lion King Store
                  </Typography>
                  <div className={classes.grow} />
                  {location.pathname === '/' && (
                      <div className={classes.button}>
                      <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                          <Badge badgeContent={totalItems} color="secondary">
                              <ShoppingCart />
                          </Badge>
                      </IconButton>
                  </div>
                  )}
              </Toolbar>
          </AppBar>
        </>
    )
}

export default Navbar;
