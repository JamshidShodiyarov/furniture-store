import React from 'react';
import { motion } from 'framer-motion';
import { Col, Container, Row } from 'reactstrap';
import './servisec.scss';
import serviceData from '../assets/data/serviceData';

const Servises = () => {
	return (
		<section className="services">
			<Container>
				<Row>
					{serviceData.map((item, i) => (
						<Col lg="3" md="6" key={i}>
							<motion.div
								whileHover={{ scale: 1.1 }}
								className="service__item"
								style={{ background: `${item.bg}` }}>
								<span>
									<i className={item.icon}></i>
									<div>
										<h3>{item.title}</h3>
										<p>{item.subtitle}</p>
									</div>
								</span>
							</motion.div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Servises;
