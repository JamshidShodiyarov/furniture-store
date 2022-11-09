import React, { useRef, useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';

import './header.css';
import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';
import { setGetTotals } from '../../redux/cartSlice';
import useAuth from '../../custom-hoods/useAuth';
import toast from 'react-hot-toast';

const Header = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartSlice.cartItem);
	const totalQuantity = useSelector((state) => state.cartSlice.totalQuantity);

	const [active, setActiv] = useState(false);

	const nav__links = [
		{
			path: 'home',
			display: 'Home',
		},
		{
			path: 'shop',
			display: 'Shop',
		},
		{
			path: 'cart',
			display: 'Cart',
		},
	];
	const headerRef = useRef(null);
	const { currentUser } = useAuth();
	const menuRef = useRef(null);

	const stickyHeaderFunc = () => {
		window.addEventListener('scroll', () => {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				headerRef.current.classList.add('sticky__header');
			} else {
				headerRef.current.classList.remove('sticky__header');
			}
		});
	};
	const menuToggle = () => menuRef.current.classList.toggle('active__menu');
	const toggleProfileActions = () => setActiv(!active);
	const logout = () => {
		signOut(auth)
			.then(() => {
				toast.success('Logged out');
			})
			.catch((err) => {
				toast.error(err.massage);
			});
	};

	useEffect(() => {
		stickyHeaderFunc();
		return () => window.removeEventListener('scroll', stickyHeaderFunc);
	}, []);

	React.useEffect(() => {
		dispatch(setGetTotals());
	}, [cartItems, dispatch]);

	return (
		<header className="header" ref={headerRef}>
			<Container>
				<Row>
					<div className="nav__wrapper">
						<div>
							<Link to="/home" className="logo">
								<img src={logo} alt="logo" />
								<div>
									<h1>Multimart</h1>
									{/* <p>Since 1990</p> */}
								</div>
							</Link>
						</div>
						<div className="navigation" ref={menuRef} onClick={menuToggle}>
							<ul className="menu">
								{nav__links.map((item) => (
									<li key={item.path} className="nav__item">
										<NavLink
											className={(navClass) => (navClass.isActive ? 'nav__active' : '')}
											to={item.path}>
											{item.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						<div className="nav__icons">
							<span className="fav__icon">
								<i className="ri-heart-line"></i>
								<span className="badge">1</span>
							</span>
							<Link to="/cart">
								<span className="cart__icon">
									<i className="ri-shopping-bag-line"></i>
									<span className="badge">{totalQuantity}</span>
								</span>
							</Link>

							<div className="profile">
								<motion.img
									onClick={toggleProfileActions}
									whileTap={{ scale: 1.2 }}
									src={currentUser ? currentUser.photoURL : userIcon}
									alt="userIcon"
								/>
								<div
									style={active ? { display: 'block' } : { display: 'none' }}
									onClick={toggleProfileActions}
									className="prifile__actions">
									{currentUser ? (
										<span onClick={logout}>Logout</span>
									) : (
										<div>
											<Link to="/signup">Signup</Link>
											<Link to="/login">Login</Link>
										</div>
									)}
								</div>
							</div>

							<div className="mobile__menu">
								<span onClick={menuToggle}>
									<i className="ri-menu-line"></i>
								</span>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
