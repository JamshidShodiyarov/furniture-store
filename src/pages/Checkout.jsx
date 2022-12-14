import React from 'react';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.scss';

const Checkout = () => {
	const totalQuantity = useSelector((state) => state.cartSlice.totalQuantity);
	const totalAmond = useSelector((state) => state.cartSlice.totalAmond);

	return (
		<Helmet title="Checkout">
			<CommonSection title="Checkout" />
			<section>
				<Container>
					<Row>
						<Col lg="8">
							<h6 className="mb-4">
								<b>Billing Information</b>
							</h6>
							<Form className="billing__form">
								<FormGroup className="form__group">
									<input type="text" placeholder="Enter your name" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Enter your mail" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="number" placeholder="Phone number" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Street address" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="City" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Postal code	" />
								</FormGroup>
								<FormGroup className="form__group">
									<input type="text" placeholder="Country" />
								</FormGroup>
							</Form>
						</Col>
						<Col lg="4">
							<div className="checkout__cart">
								<h6>
									Total Quantity:<span>{totalQuantity} items</span>
								</h6>
								<h6>
									Total Amount:<span>$ {totalAmond}</span>
								</h6>
								<h6>
									<span>
										Shipping: <br></br>
										free shipping
									</span>
									<span>$ 0</span>
								</h6>

								<h4>
									Total Cost: <span>$ {totalAmond}</span>
								</h4>
								<button>Place an order</button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Checkout;
