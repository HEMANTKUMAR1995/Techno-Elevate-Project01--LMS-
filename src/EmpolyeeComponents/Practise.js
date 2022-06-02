import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import InputComponent from './InputComponent';

function Practise() {
  return (
    <div>
        <Navbar bg='light' className='justify-content-start' >
  <Container fluid>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Text className='justify-content-center' style={{border:'1px solid green',width:'500px'}} >
            <div class="form-group has-search" style={{border:'1px solid red'}}>
              <span class="fa fa-search form-control-feedback"></span>
              {/* <input type="text" class="form-control" placeholder="Search" style={{ width: '500px' }} /> */}
              <InputComponent placeholder='Search' style={{width:"100%"}}  type='text' className='form-control'/>
            </div>
          </Navbar.Text>
      <Navbar.Text >
        Signed in as: <a href="#login">HEmant Kumar</a>
      </Navbar.Text>
  </Container>
</Navbar>
    </div>
  )
}

export default Practise