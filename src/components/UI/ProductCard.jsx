import React from 'react';
import { Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import '../../styles/productCard.scss';

const ProductCard = ({ item }) => {
	const dispatch = useDispatch();
	const onToggleCart = () => {
		dispatch(addToCart(item));
	};
	return (
		<Col lg="3" md="4">
			<div className="product__item">
				<div className="product__img">
					<motion.img whileHover={{ scale: 0.8 }} src={item.imgUrl} alt={item.imgUrl} />
				</div>
				<div className="p-2 product__info">
					<h3 className="product__name">
						<Link to={`/shop/${item.id}`}>{item.productName}</Link>
					</h3>
					<span>Chair</span>
				</div>
				<div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
					<span className="price">${item.price}</span>
					<span className="price">{item.count}</span>
					<motion.span whileTap={{ scale: 1.2 }} onClick={onToggleCart}>
						<i className="ri-add-line"></i>
					</motion.span>
				</div>
			</div>
		</Col>
	);
};

export default ProductCard;
