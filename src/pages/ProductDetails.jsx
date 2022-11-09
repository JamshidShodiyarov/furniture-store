import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import products from '../assets/data/products';

import '../styles/product-details.css';
import ProductList from '../components/UI/ProductList';
import { addToCart } from '../redux/cartSlice';

const ProductDetails = () => {
	const [tab, setTab] = useState('desc');
	const [nameValue, setNameValue] = useState('');
	const [ratingValue, setRatingValue] = useState('');

	const [messageValue, setMessageValue] = useState('');

	const onSubmit = () => {
		const obj = {
			nameValue,
			ratingValue,
			messageValue,
		};
	};
	const params = useParams();
	const { id } = params;

	const product = products.find((item) => item.id === id);
	const { productName, imgUrl, category, price, description, reviews, avgRating, shortDesc } =
		product;
	const productCat = products.filter((item) => item.category === category);

	const dispatch = useDispatch();
	const onToggleCart = () => {
		dispatch(addToCart(product));
	};

	return (
		<Helmet title={category}>
			<CommonSection title={productName} />
			<section>
				<Container>
					<Row>
						<Col lg="6">
							<img src={imgUrl} alt="imgUrl" />
						</Col>
						<Col lg="6">
							<div className="product__details">
								<h2>{productName}</h2>
								<div className="product__rating d-flex aling-items-center gap-5 mb-2">
									<div className="">
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-s-fill"></i>
										</span>
										<span>
											<i className="ri-star-half-s-line"></i>
										</span>
									</div>
									<p>
										(<span>{avgRating}</span> ratings)
									</p>
								</div>
								<span className="product__price">Price: {price}$ </span>
								<span className="product__category ">
									<b>Category:</b> {category}
								</span>
								<p className="mt-3">{shortDesc}</p>
								<Button onClick={onToggleCart} className="mt-5" color="secondary">
									Add To Cart
								</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						<Col lg="12">
							<div className="tab__wrapper d-flex align-items-center gap-5 ">
								<h6 className={tab === 'desc' ? 'active__tab' : ''} onClick={() => setTab('desc')}>
									Description
								</h6>
								<h6 className={tab === 'rew' ? 'active__tab' : ''} onClick={() => setTab('rew')}>
									Rewiews ({reviews.length})
								</h6>
							</div>
							{tab === 'desc' ? (
								<div className="tab__content">
									<p className="mt-5	">{description}</p>
								</div>
							) : (
								<ul className="tab__content mt-5">
									{reviews?.map((item, i) => (
										<div className="mb-5" key={i}>
											<h6>John Doe</h6>
											<p>
												<span>{item.rating}</span> (rating)
											</p>
											<li>{item.text}</li>
										</div>
									))}
								</ul>
							)}
							<form className="rewiev__form">
								<h1>Levie your experince</h1>
								<div>
									<input
										value={nameValue}
										type="text"
										placeholder="Enter name"
										onChange={(e) => setNameValue(e.target.value)}
									/>
								</div>
								<div className="star_icons">
									<span
										className={ratingValue === 1 ? 'active' : ''}
										onClick={() => {
											setRatingValue(1);
										}}>
										1<i className="ri-star-fill"></i>
									</span>
									<span
										className={ratingValue === 2 ? 'active' : ''}
										onClick={() => {
											setRatingValue(2);
										}}>
										2<i className="ri-star-fill"></i>
									</span>
									<span
										className={ratingValue === 3 ? 'active' : ''}
										onClick={() => {
											setRatingValue(3);
										}}>
										3<i className="ri-star-fill"></i>
									</span>
									<span
										className={ratingValue === 4 ? 'active' : ''}
										onClick={() => {
											setRatingValue(4);
										}}>
										4<i className="ri-star-fill"></i>
									</span>
									<span
										className={ratingValue === 5 ? 'active' : ''}
										onClick={() => {
											setRatingValue(5);
										}}>
										5<i className={'ri-star-fill '}></i>
									</span>
								</div>
								<div>
									<textarea
										value={messageValue}
										type="text"
										placeholder="Enter your experince message"
										onChange={(e) => setMessageValue(e.target.value)}
									/>
								</div>
								<Button className="btn " onClick={onSubmit}>
									Submit
								</Button>
							</form>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						<h1 className="text-center">You might also like</h1>
						<ProductList data={productCat} />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default ProductDetails;
