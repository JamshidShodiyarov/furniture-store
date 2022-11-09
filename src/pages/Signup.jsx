import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import { auth, db, storage } from '../firebase.config.js';

import Helmet from '../components/Helmet/Helmet';
import '../styles/login.scss';

const Signup = () => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [file, setFile] = useState(null);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const signup = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			const storageRef = ref(storage, `images/${Date.now() + userName}`);
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTask.on(
				(error) => {
					toast.error(error.message);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						await updateProfile(user, {
							displayName: userName,
							photoURL: downloadURL,
						});
						await setDoc(doc(db, 'users', user.uid), {
							uid: user.uid,
							displayName: userName,
							email,
							photoURL: downloadURL,
						});
					});
				},
			);
			setLoading(false);
			toast.success('Account created');
			navigate('/login');
		} catch (error) {
			setLoading(false);
			toast.error('something went wrong');
		}
	};

	return (
		<Helmet title="signup">
			<section>
				<Container>
					<Row>
						{loading ? (
							<Col lg="12" className="text-center">
								<h3 className="fw-bold">Loading.....</h3>
							</Col>
						) : (
							<Col lg="6" className="m-auto text-center">
								<h3 className="fw-bold fs-4 mb-4">Signup</h3>
								<Form className="auth__form" onSubmit={signup}>
									<FormGroup className="form__group">
										<input
											type="text"
											placeholder="Entar User Name"
											value={userName}
											onChange={(e) => setUserName(e.target.value)}
										/>
									</FormGroup>
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
									<FormGroup className="form__group">
										<input type="file" onChange={(e) => setFile(e.target.files[0])} />
									</FormGroup>
									<button type="submit">Create an account</button>
									<p>
										Already an acount? <Link to="/login"> Login</Link>
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

export default Signup;
