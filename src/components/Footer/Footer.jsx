import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="4">
						<div className="logo mb-1">
							<div className="text-white">
								<h1>Multimart</h1>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus culpa, nisi esse
							modi ipsum! Sed neque corrupti ipsam vero.
						</p>
					</Col>
					<Col lg="3">
						<div className="footer__quick-links">
							<h4 className="quick__links-title">Top Categories</h4>
							<ListGroup className="mb-3">
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Mobile Phones</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Modern Sofa</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Arm Chair</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Smart Watches</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg="2">
						<div className="footer__quick-links">
							<h4 className="quick__links-title">Use full links</h4>
							<ListGroup className="mb-3">
								<ListGroupItem className="ps-0 border-0">
									<Link to="/shop">Shop</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="/cart">Cart</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="/login">Login</Link>
								</ListGroupItem>
								<ListGroupItem className="ps-0 border-0">
									<Link to="#">Privacy Policy</Link>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg="3">
						<div className="footer__quick-links">
							<h4 className="quick__links-title">Contact</h4>
							<ListGroup className="mb-3">
								<ListGroupItem className="icons ps-0 border-0 d-flex gap-1">
									<span>
										<i className="ri-map-pin-line"></i>
									</span>
									<p>123 ZindaBazar, Syhet, Bangladesh</p>
								</ListGroupItem>
								<ListGroupItem className="icons ps-0 border-0 d-flex gap-1">
									<span>
										<i className="ri-phone-line"></i>
									</span>
									<p>+998991234567</p>
								</ListGroupItem>
								<ListGroupItem className="icons ps-0 border-0 d-flex gap-1">
									<span>
										<i className="ri-mail-line"></i>
									</span>
									<p>example123@mail.com</p>
								</ListGroupItem>
							</ListGroup>
						</div>
					</Col>
					<Col lg="12">
						<p className="Copyright">
							Copyright {year} developed by Mugibur Rahman. All rights reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
