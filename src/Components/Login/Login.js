import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-4 mn ">
							<div className="login rounded">
								<h1 className="text-center animate__pulse pt-4">Login</h1>
								<form className="p-4">
									<input type="text" name="username" className="form-control mb-3" placeholder="Enter Username or email" />
									<input type="password" name="password" className="form-control mb-3" placeholder="Enter Password" />
									<button
										type="submit"
										name="submit"
										className="form-control submit-btn bg-success text-capitalize text-light border-0 rounded px-3 py-1"
										value=""
									>
										sign in
									</button>
									<Link to="/registration" className="text-center float-end text-capitalize">
										register now
									</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
