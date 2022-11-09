import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero-img.png';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png';
import '../styles/home.scss';
import Servises from '../servises/Servises';
import ProductList from '../components/UI/ProductList';
import Clock from '../components/UI/Clock';
import { setGetTotals } from '../redux/cartSlice';

const Home = () => {
	const [trendingProducts, setTrendingProducts] = useState();
	const [bestSales, setBestSales] = useState();
	const [mobileProducts, setMobileProducts] = useState([]);
	const [wirelessProducts, setWirelessProducts] = useState([]);
	const [popularProducts, setPopularProducts] = useState([]);
	const year = new Date().getFullYear();
	const cart = useSelector((state) => state.cartSlice.cartItem);
	const dispatch = useDispatch();

	useEffect(() => {
		const filterProduct = products.filter((item) => item.category === 'chair');
		const filterBestSalesProduct = products.filter((item) => item.category === 'sofa');
		const filterMobileProducts = products.filter((item) => item.category === 'mobile');
		const filterWirelessProducts = products.filter((item) => item.category === 'wireless');
		const filterPopularProducts = products.filter((item) => item.category === 'watch');
		setTrendingProducts(filterProduct);
		setBestSales(filterBestSalesProduct);
		setMobileProducts(filterMobileProducts);
		setWirelessProducts(filterWirelessProducts);
		setPopularProducts(filterPopularProducts);
	}, []);
	useEffect(() => {
		dispatch(setGetTotals());
	}, [cart]);

	return (
		<Helmet title={'Home'}>
			<section className="hero__section">
				<Container>
					<Row>
						<Col lg="6" md="6">
							<div className="hero__content">
								<p className="hero__subtitle">Trending product in {year}</p>
								<h2>Make Your Interior More Minimalistic & Modern</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque nulla
									cupiditate incidunt a iure eaque harum delectus dicta suscipit.
								</p>
								<button className="shop__btn">
									<Link to="shop">ShOP NOW</Link>
								</button>
							</div>
						</Col>
						<Col lg="6" md="6">
							<div className="hero__img">
								<img src={heroImg} alt="heroImg" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<Servises />
			<section className="trending__products">
				<Container>
					<Row>
						<Col lg="12" className="text-center">
							<h2 className="section__title">Trending Products</h2>
						</Col>
						<ProductList data={trendingProducts} />
					</Row>
				</Container>
			</section>
			<section className="best__sales">
				<Container>
					<Row>
						<Col lg="12" className="text-center">
							<h2 className="section__title">Best Sales</h2>
						</Col>
						<ProductList data={bestSales} />
					</Row>
				</Container>
			</section>
			<section className="timer__count">
				<Container>
					<Row>
						<Col md="6" lg="6">
							<div className="clock__top-content">
								<h4 className="text-white fs-6 mb-2">Limited Offers</h4>
								<h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
							</div>
							<Clock />
							<motion.button whileTap={{ scale: 1.2 }} className="buy__btn store_btn">
								<Link to="/shop">Visit Store</Link>
							</motion.button>
						</Col>
						<Col md="6" lg="6">
							<img src={counterImg} alt={counterImg} />
						</Col>
					</Row>
				</Container>
			</section>
			<section className="new__arrivals">
				<Container>
					<Row>
						<Col lg="12" className="text-center">
							<h2 className="section__title">New Arrivals</h2>
						</Col>
						<ProductList data={mobileProducts} />
						<ProductList data={wirelessProducts} />
					</Row>
				</Container>
			</section>
			<section className="popular__category">
				<Container>
					<Row>
						<Col lg="12" className="text-center">
							<h2 className="section__title">Popular in Category</h2>
						</Col>
						<ProductList data={popularProducts} />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Home;
