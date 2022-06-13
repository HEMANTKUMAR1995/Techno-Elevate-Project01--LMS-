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


function TechnicalSkills() {
const [technicalData, setTechnicalData] = useState({
  SkillType:"",
  SkillRatings:"",
  YEarOfExperience:"",
})

let getTechnicalDetails=(e)=>{
  setTechnicalData({...technicalData,[e.target.name]:e.target.value})
}

console.log(technicalData);

let DatasentToLocalStorage = () => {
  localStorage.setItem("Technical Details", JSON.stringify(technicalData));
};
let ValidateFunction = () => {
  if (
    technicalData.SkillType &&
    technicalData.SkillRatings &&
    technicalData.YEarOfExperience
  ) {
    DatasentToLocalStorage();
    navigateNext();
  } else {
    alert("Please Fill all the feilds");
  }
};

    let navigate = useNavigate()
  let navigateNext =()=>
  {
    navigate('/Experience')
  }
  let navigatePrevious=()=>
  {
      navigate('/BankDetails')
  }
  return (
    <div> <div className="container fluid">
    <navbar>
      <Nav variant="scrollable" defaultActiveKey="/Primary">
        <Nav.Item>
          <Nav.Link href="/">Primary Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/SecondaryInfo">Secondary Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/SecondaryInfo">Education Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/TechnicalSkills">Address Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/BankDetails">Bank Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link
            href="/Secondary"
            style={{ color: "#086288", fontWeight: "600", fontSize: "48px" }}
          >Technical Skills
          </Nav.Link>  <b>
              <hr
                style={{ width:"40%",
                  height: "5px",
                  background: "#f29a27",
                }}
              ></hr>
            </b>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Experience">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-8">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </navbar>
    <Form className="container fluid  mt-5 square border border-light border-4 rounded-3 ">
      <Row className="mb-3">
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
        Skill Type
          </Form.Label>
          <Form.Control
            style={{ width: "540px", height: "64px", fontSize: "20px" }}
            type="text"
            name="SkillType"
            value={technicalData.SkillType}
            onChange={getTechnicalDetails}
          />
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
    Skill Rating
          </Form.Label>
          <Form.Control
            style={{ width: "540px", height: "64px", fontSize: "20px" }}
            type="text"
            name='SkillRatings'
            value={technicalData.SkillRatings}
            onChange={getTechnicalDetails}
          />
        </Form.Group>
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
           Year Of Experience(over skill)
          </Form.Label>
          <Form.Select
            style={{ width: "540px", height: "64px", fontSize: "20px" }}
            aria-label="Default select example"
            name="YEarOfExperience"
            type="number"
            value={technicalData.YEarOfExperience}
            onChange={getTechnicalDetails}
          >
            <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
          </Form.Select>
        </Form.Group>

      </Row>
      <Row>
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
              Next
            </Button>
          </Form>
          </Container>
        </Navbar>
      </Row>
    </Form>
  </div></div>
  )
}

export default TechnicalSkills