import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext';
import {CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	// console.log(products)

	const addItem = item => {
			return (item.id && setCart([...cart, item]))
		};
	
	
	return (
		<div className="App">
			

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}} >
				<CartContext.Proviver value={cart} />
				
					<Navigation />

				<Route exact path="/">
					<Products  />
				</Route>
			

			
				<Route path="/cart">
					<ShoppingCart component={ShoppingCart }/>
				</Route>

				<CartContext.Proviver />
			</ProductContext.Provider>
		</div>
	);
}

export default App;

// products={products} addItem={addItem}
// cart={cart} 
