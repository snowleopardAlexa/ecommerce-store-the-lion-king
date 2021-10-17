import React from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { classExpression } from '@babel/types';

const steps = ['Shipping address', 'Payment details'];

export const Checkout = () => {
    return (
        <>
        <main>
          <div className={classExpression.toolbar} />
          <main className={classExpression.layout} />
            <Paper className={classExpression.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={0} className={classExpression.stepper}>
                     
                </Stepper>
            </Paper>
          </main>
        </>
    )
}

export default Checkout;