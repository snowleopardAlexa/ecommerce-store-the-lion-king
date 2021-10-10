import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {
        id: 1,
        name: 'T-Shirt-Female-1',
        description: 'Simba and Nala T-Shirt Female',
        price: '$25',
        image: ''
    },
    {
        id: 2,
        name: 'T-Shirt-Male-1',
        description: 'Simba and Nala T-Shirt Male',
        price: '$30',
        image: ''
    },
];

const Products = () => {
    return (
    <main>
      <Grid container justify="center" spacing={4}>
          {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                 <Product product={product} />
              </Grid>    
          ))}
      </Grid>
    </main>
    );
}

export default Products;