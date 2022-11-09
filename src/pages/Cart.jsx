import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/cart.scss';
import { addToCart, minToCart, removeToCart, clearToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
	const cartItems = useSelector((state) => state.cartSlice.cartItem);
	const totalQuantity = useSelector((state) => state.cartSlice.totalQuantity);
	const totalAmond = useSelector((state) => state.cartSlice.totalAmond);
	const dispatch = useDispatch();

	const addToggleCart = (item) => {
		dispatch(addToCart(item));
	};
	const minToggleCart = (id) => {
		dispatch(minToCart(id));
	};
	const removeToggleCart = (id) => {
		dispatch(removeToCart(id));
	};
	const clearToggleCart = () => {
		dispatch(clearToCart());
	};

	return (
		<Helmet title={'Cart'}>
			<CommonSection title={'Shopping Cart'}></CommonSection>
			<Container>
				<Row>
					<Col lg="9">
						<table className="table">
							<thead>
								<tr className="table__head">
									<th>Image</th>
									<th>Name</th>
									<th>Price</th>
									<th>DEC</th>
									<th>Count</th>
									<th>INC</th>
									<th>Amount</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
								{cartItems.length !== 0 ? (
									cartItems.map((item, i) => (
										<tr key={i} className="table__body">
											<td>
												<img src={item.imgUrl} alt={item.imgUrl} />
											</td>
											<td className="body__description">{item.productName}</td>
											<td className="body__description">{item.price} $</td>
											<td className="body__description icone minus">
												<button
													disabled={item.count === 1 && true}
													onClick={() => minToggleCart(item.id)}>
													<i className="ri-indeterminate-circle-line"></i>
												</button>
											</td>
											<td className="body__description">
												<b>{item.count}</b>
											</td>
											<td className="body__description icone plus">
												<button onClick={() => addToggleCart(item)}>
													<i className="ri-add-circle-line"></i>
												</button>
											</td>
											<td className="body__description">
												<b>{item.price * item.count}</b>
											</td>
											<td className="body__description icone">
												<button onClick={() => removeToggleCart(item.id)}>
													<i className="ri-delete-bin-2-line"></i>
												</button>
											</td>
										</tr>
									))
								) : (
									<h1 text-center>No item added to the cart</h1>
								)}
							</tbody>
						</table>
					</Col>
					<Col lg="3">
						<div className="total__quantity">
							<h6>Total Quantity</h6>
							<span>
								<b>{totalQuantity}</b>
							</span>
						</div>
						<div className="total__amount">
							<h6>Total Amount</h6>
							<span>
								<b>$ {totalAmond}</b>
							</span>
						</div>
						<p className="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
						<Button onClick={clearToggleCart} className="mt-5" color="danger">
							Clear
						</Button>
						<div className="button__links">
							<Button className="mt-5">
								<Link to="/shop">Continue Shopping</Link>
							</Button>
							<Button className="mt-1">
								<Link to="/checkout">Checkout</Link>
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</Helmet>
	);
};

export default Cart;
