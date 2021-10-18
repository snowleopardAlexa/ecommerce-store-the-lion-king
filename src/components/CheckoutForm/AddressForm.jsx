import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import { commerce } from '../../lib/commerce';

import FormInput from './CustomTextField';

const AddressForm = ( { checkoutToken }) => {

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState([]);

    const methods = useForm();

    const countries =   Object.entries(shippingCountries).map(([code, name]) => ({
        id: code, label: name
    }));

    // function fetch countries
    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        // get the array of keys: AUS, POL...
        setShippingCountry(Object.keys(countries));
    }
 
    // function to fetch subdivisions
    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisons(countryCode);
 
        setShippingSubdivisions(subdivisions);
        setShippingSubdivisions(Object.keys(subdivisions)[0]);
    }


    // we can have multiple useffects in the app
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, []);

    useEffect(() => {
        if(shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);


    return (
        <>
         <Typography variant="h6" gutterBottom>Shipping Address</Typography>
             <FormProvider {... methods}>
                 <form onSubmit=''>
                     <Grid container spacing={3}>
                       <FormInput required name='firstName' label='First Name' />
                       <FormInput required name='lastName' label='Last Name' />
                       <FormInput required name='address1' label='Address' />
                       <FormInput required name='email' label='Email' />
                       <FormInput required name='city' label='City' />
                       <FormInput required name='zip' label='ZIP / Postal code' />
                       <Grid item xs={12} sm={6}>
                          <InputLabel>Shipping Country</InputLabel>
                          <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                              {countries.map((country) => (
                                 <MenuItem key={country.id} value={country.id}>
                                   {country.label}
                                </MenuItem>
                              ))}
                          </Select>
                       </Grid>
                       <Grid item xs={12} sm={6}>
                          <InputLabel>Shipping Subdivision</InputLabel>
                          <Select value={''} fullWidth onChange={''}>
                              <MenuItem key={''} value={''}>
                                 Select Me
                              </MenuItem>
                          </Select>
                       </Grid>
                       <Grid item xs={12} sm={6}>
                          <InputLabel>Shipping Options</InputLabel>
                          <Select value={''} fullWidth onChange={''}>
                              <MenuItem key={''} value={''}>
                                 Select Me
                              </MenuItem>
                          </Select>
                       </Grid> 
                    </Grid>
                 </form>
             </FormProvider>
        </>
    );
}

export default AddressForm;
