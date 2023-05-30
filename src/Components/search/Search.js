import React, { useEffect, useState } from "react";
import "./Search.css";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Search = () => {
    const [data, setData] = useState('');
    const [records, setRecords] = useState('');

    const filter = ()=>{
      setRecords(data.filter(f=>f.title))
    }

    const inputData= async() =>{
        const apidata = await fetch('https://jsonplaceholder.typicode.com/todos');
        const AllData = await apidata.json();
        setData(AllData);
    }
    useEffect(()=>{
      inputData();
    },[])

  return (
    <>
      <Row>
        <h1 className="text-capitalize text-light text-center">search</h1>
        <Col lg={6} className="search-form">
          <Form className="mb-4">
            <Form.Group>
              <Form.Control
                type="search"
                className="rounded-0 "
                placeholder="search product"
                // value={img}
                onChange={filter}
              />
            </Form.Group>
          </Form>
          <table>
            <thead>
              <tr className="text-light">
                <td>ID</td>
                <td>Name</td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i)=>{
                return(
                    <tr className="text-light" key={i}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.completed}</td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default Search;
