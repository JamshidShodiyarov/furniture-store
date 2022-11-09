import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Checkout from '../pages/Checkout';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Signup from '../pages/Signup';
import ProductedRoute from './ProductedRoute';

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="home" />} />
			<Route path="home" element={<Home />} />
			<Route path="shop" element={<Shop />} />
			<Route path="shop/:id" element={<ProductDetails />} />
			<Route path="cart" element={<Cart />} />
			<Route
				path="checkout"
				element={
					<ProductedRoute>
						<Checkout />
					</ProductedRoute>
				}
			/>
			<Route path="login" element={<Login />} />
			<Route path="signup" element={<Signup />} />
		</Routes>
	);
};

export default Routers;
