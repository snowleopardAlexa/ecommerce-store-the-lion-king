import React from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { classExpression } from '@babel/types';

export const Checkout = () => {
    return (
        <>
        <main>
          <div className={classExpression.toolbar} />
          <main className={classExpression.layout} />
            <Paper className={classExpression.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
               
            </Paper>
          </main>
        </>
    )
}

export default Checkout;