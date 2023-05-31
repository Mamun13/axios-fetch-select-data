import React, { useEffect, useState } from "react";
import "./Search.css";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
// import ManualData from'./Result'

const Search = () => {
    const [data, setDta] = useState([]);
    const [records, setRecoreds] = useState(data);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(
          res=>{
            setDta(res.data)
            setRecoreds(res.data)
          }
        )
        .catch(
          err=>console.log(err)
        )
    },[])

    const filter=(event)=>{
        setRecoreds(data.filter(f=>f.title.toLowerCase().includes(event.target.value)))
    }

  return (
    <>
      <Row>
        <h1 className="text-capitalize text-light text-center">search</h1>
        <Col lg={6} className="sform mb-5">
          <Form>
              <Form.Control type="text" className="rounded-1 py-2" onChange={filter}/>
            </Form>
        </Col>
          
        <Col lg={6} className="search-form ">
          
          {records.map((curElem, index)=>{
            return(
              <div key={index} className="d-flex justify-content-between text-light">
                <p>{curElem.id}</p>
                <p>{curElem.title}</p>
              </div>
            )
          })}
        </Col>
      </Row>
    </>
  );
};

export default Search;
