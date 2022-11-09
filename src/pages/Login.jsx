import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';

import { auth } from '../firebase.config';
import Helmet from '../components/Helmet/Helmet';
import '../styles/login.scss';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const signIn = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			setLoading(false);
			toast.success('Successfully logged in');
			navigate('/checkout');
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};

	return (
		<Helmet title="login">
			<section>
				<Container>
					<Row>
						{loading ? (
							<Col lg="12" className="text-center">
								<h3 className="fw-bold">Loading.....</h3>
							</Col>
						) : (
							<Col lg="6" className="m-auto text-center">
								<h3 className="fw-bold fs-4 mb-4">Login</h3>
								<Form className="auth__form" onSubmit={signIn}>
									<FormGroup className="form__group">
										<input
											type="email"
											placeholder="Entar your email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</FormGroup>
									<FormGroup className="form__group">
										<input
											type="password"
											placeholder="Entar your password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</FormGroup>
									<button type="submit">Login</button>
									<p>
										Don't have an acount? <Link to="/signup"> Create an account</Link>
									</p>
								</Form>
							</Col>
						)}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Login;
