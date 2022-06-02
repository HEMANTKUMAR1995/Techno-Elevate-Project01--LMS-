import React, { useState } from 'react'
import {
    Button,
    Col,
    Container,
    Form,
    Nav,
    Navbar,
    Row,
  } from "react-bootstrap";
import { useNavigate } from 'react-router';
// import Primary from './Primary';


function Contact() {
  // const [localStorageData, setLocalStorageData] = useState([])
  
  const [contactdetails, setContactdetails] = useState({
    ContactType:"",
    ContactNumber:"+91",
  })

let getContactData=(e)=>{
  setContactdetails({
    ...contactdetails,[e.target.name]:e.target.value
  })
}
console.log(contactdetails);

let DatasentToLocalStorage = () => {
  localStorage.setItem("contact Details", JSON.stringify(contactdetails));
};
let ValidateFunction = () => {
  if (
    contactdetails.ContactType &&
   contactdetails.ContactNumber
  ) {
    DatasentToLocalStorage();
    // navigateNext();
  } else {
    alert("Please Fill all the feilds");
  }
};
 
// let dataFromLocalStorage= setLocalStorageData(localStorage.getItem("dataFromLocalStorage",JSON.parse(localStorageData)));
// console.log(dataFromLocalStorage);
    let navigate = useNavigate()
    // let navigateNext =()=>
    // {
    //   navigate('/')
    // }


    let navigatePrevious=()=>
    {
        navigate('/TechnicalSkills')
    }
    // let AddNewFeild=()=>{
    // }
    return (
      <div> <div className="container fluid">
      <navbar>
        <Nav variant="scrollable" defaultActiveKey="/Primary">
          <Nav.Item>
            <Nav.Link href="/Primary">Primary Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/SecondaryInfo">Secondary Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/EducationDetails">Education Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/AddressDetails">Address Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/BankDetails">Bank Details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/TechnicalSkills">Technical Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/Experience">Experience</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link
              href="/Contact"
              style={{ color: "#086288", fontWeight: "600", fontSize: "48px" }}
            >Contact
            </Nav.Link>  <b>
              <hr
                style={{ width:"40%",
                  height: "5px",
                  background: "#f29a27",
                  paddingTop:"3px",
                  marginTop:"-5px"
                }}
              ></hr>
            </b>
          </Nav.Item>
          {/* <Nav.Item>
          <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav.Item> */}
        </Nav>
      </navbar>
      <Form className="container fluid  mt-5 square border border-light border-4 rounded-3 ">
        <Row className="mb-3">

          
        <Form.Group
            style={{ textAlign: "left" }}
            as={Col}
            controlId="formGridEmail"
          >
            <Form.Label
              style={{
                fontFamily: "Open Sans",
                fontSize: "21px",
                color: "#707070",
              }}
            >
            Contact Type
            </Form.Label>
            <Form.Select
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              aria-label="Default select example"
              name="ContactType"
              value={contactdetails.ContactType}
              onChange={getContactData}
            >
              <option></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            style={{ textAlign: "left" }}
            as={Col}
            controlId="formGridPassword"
          >
            <Form.Label
              style={{
                fontFamily: "Open Sans",
                fontSize: "21px",
                color: "#707070",
              }}
            >
     Contact Number
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="tel"
              name="ContactNumber"
              value={contactdetails.ContactNumber}
              onChange={getContactData}
              
            />
          </Form.Group>
        </Row>
        <Row>
          <p style={{ marginLeft: "600px"  , marginTop:"20px"}} >
          <b> Add</b>
            </p>
          <Navbar
            className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "
            expand="lg"
          >
            <Container fluid>
            <Button variant="secondary" size="lg" onClick={navigatePrevious} >
              Previous
            </Button>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Button variant="primary" size="lg" onClick={ValidateFunction}>
                Submit
              </Button>
            </Form>
            </Container>
          </Navbar>
        </Row>
      </Form>
    </div></div>
    )
}

export default Contact
