import React, {useState} from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { classExpression } from '@babel/types';

import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];

export const Checkout = () => {

     const [activeStep, setActiveStep] = useState(0);
     const classes = useStyles();

    return (
        <>
        <main>
          <div className={classes.toolbar} />
          <main className={classes.layout} />
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={0} className={classes.stepper}>
                     {steps.map((step) => (
                         <Step key={step}>
                             <StepLabel>{step}</StepLabel>
                         </Step>
                    ))}
                </Stepper>
            </Paper>
          </main>
        </>
    )
}

export default Checkout;