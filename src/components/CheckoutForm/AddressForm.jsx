import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

const AddressForm = () => {
    return (
        <>
         <Typography variant="h6">
             <FormProvider {... methods}>
                 <form onSubmit=''>
                     <Grid container spacing={3}>
                       <FormInput required name='firstName' label='First Name' />
                     </Grid>
                 </form>
             </FormProvider>
         </Typography>
        </>
    )
}

export default AddressForm;
