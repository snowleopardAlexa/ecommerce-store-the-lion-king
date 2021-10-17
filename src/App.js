import React, { useState, useEffect} from 'react';
// import store
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Products, Navbar, Cart, Checkout } from './components';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    // function add products to cart
    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);

    }

    // function add cart quantity
    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity});

        setCart(cart);
    }

    // function remove from cart
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    // function empty the cart
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

   
    return (
        <Router>
          <div>
            <Navbar totalItems={cart.total_items} />
            <Switch>
                <Route exact path="/">
                  <Products products={products} onAddToCart={handleAddToCart} />
                </Route>
                <Route exact path="/cart">
                   <Cart cart={cart}
                     handleUpdateCartQty={handleUpdateCartQty}
                     handleRemoveFromCart={handleRemoveFromCart}
                     handleEmptyCart={handleEmptyCart}
                   />
                </Route>
                <Router exact path="/checkout">
                  <Checkout cart={cart} />
                </Router>
            </Switch>
          </div>
        </Router>
    )
}

export default App;
