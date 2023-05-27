import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const Dashboard = () => {
	const [num, setNum] = useState();
	const [name, setName] = useState();
	const [moves, setMoves] = useState();

	useEffect(()=>{
		async function getData (){
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
			console.log(res.data);
			setName(res.data.name);
			setMoves(res.data.moves.length);
		} 
		getData ();
	});

	return (
		<>
			<section className="dashboard">
				<Container>
					<Row>
						<Col lg={6} className="text-light mt-4 select-form">
							<Form.Select 
								aria-label="Default select example" 
								className='rounded-0'
								value={num}
								onChange={(event)=>{
									setNum(event.target.value);
								}}
							>
								<option>Open this select menu</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</Form.Select>
							{/* <h1>{num}</h1> */}
							<h1 className='mt-3 text-center'>The name is :<span className='text-danger fw-bold text-capitalize'> {name}</span></h1>
							<h1 className=' text-center'>Total numberof moves : <span className='text-danger fw-bold'>{moves}</span> </h1>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Dashboard;
