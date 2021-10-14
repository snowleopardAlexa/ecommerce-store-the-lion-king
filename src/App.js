import React, { useState, useEffect} from 'react';
// import store
import { commerce } from './lib/commerce';

import { Products, Navbar } from './components';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        await commerce.cart.retrieve();

        setCart(cart)
    }

    useEffect(() => {
        fetchProducts();
    }, []);

   

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App;
