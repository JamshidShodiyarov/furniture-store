import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';

const Shop = () => {
	const [items, setItems] = useState(products);

	const filterProduct = (e) => {
		const filterValue = e.target.value;
		if (filterValue === 'sofa') {
			const filteredProducts = products.filter((item) => item.category === filterValue);
			setItems(filteredProducts);
		}
		if (filterValue === 'watch') {
			const filteredProducts = products.filter((item) => item.category === filterValue);
			setItems(filteredProducts);
		}
		if (filterValue === 'chair') {
			const filteredProducts = products.filter((item) => item.category === filterValue);
			setItems(filteredProducts);
		}
		if (filterValue === 'mobile') {
			const filteredProducts = products.filter((item) => item.category === filterValue);
			setItems(filteredProducts);
		}
		if (filterValue === 'wireless') {
			const filteredProducts = products.filter((item) => item.category === filterValue);
			setItems(filteredProducts);
		}
		if (filterValue === 'all') {
			setItems(products);
		}
	};
	const searchProduct = (e) => {
		const searchValue = e.target.value;
		const searchedProducts = products.filter((item) =>
			item.productName.toLowerCase().includes(searchValue.toLowerCase()),
		);
		setItems(searchedProducts);
	};

	return (
		<Helmet title={'Shop'}>
			<CommonSection title="Products"></CommonSection>
			<section>
				<Container>
					<Row>
						<Col lg="3" md="3">
							<div className="filter__widget">
								<select name="category" id="1" onChange={filterProduct}>
									<option value="all">All</option>
									<option value="chair">Chair</option>
									<option value="watch">Watch</option>
									<option value="sofa">Sofa</option>
									<option value="mobile">Mobile</option>
									<option value="wireless">Wireless</option>
								</select>
							</div>
						</Col>
						<Col lg="3" md="3">
							<div className="filter__widget">
								<select name="sort" id="2">
									<option>Sort</option>
									<option value="Price_inc">By_Price_inc</option>
									<option value="Price_dec">By_Price_dec</option>
								</select>
							</div>
						</Col>
						<Col lg="6" md="6">
							<div className="search__box">
								<span>
									<i className="ri-search-line"></i>
								</span>
								<input type="text" placeholder="Search....." onChange={searchProduct} />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				{items.length === 0 ? (
					<h1 className="text-center notFound">No products are found</h1>
				) : (
					<Container>
						<Row>
							<ProductList data={items} />
						</Row>
					</Container>
				)}
			</section>
		</Helmet>
	);
};

export default Shop;
