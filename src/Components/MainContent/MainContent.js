import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const MainContent = () => {
  return (
    <>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5 className='text-dark'>Accordion 1</h5></Accordion.Header>
        <Accordion.Body>
          <button type="" className='mt-4'>ADD</button>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    </>
  )
}

export default MainContent