import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

const Registration = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-4 mn ">
							<div className="register rounded">
								<h1 className="text-center animate__pulse pt-4 text-capitalize stroke">registration</h1>
								<form className="p-4">
									<input type="email" name="email" className="form-control mb-3" placeholder="Enter Your Email" />
									<input type="text" name="name" className="form-control mb-3" placeholder="Enter Username" />
									<input type="number" name="number" className="form-control mb-3" placeholder="Enter Phone Number" />
									<input type="password" name="password" className="form-control mb-3" placeholder="Enter Password" />
									<input type="password" name="password" className="form-control mb-3" placeholder="Enter confirm Password" />
									<input
										type="submit"
										name="submit"
										className="form-control submit-btn bg-success text-light border-0 rounded px-3 py-1"
									/>
									<div className="mb-4">
										<Link to="/" className="text-center float-end text-capitalize">
											back to Login
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Registration;
