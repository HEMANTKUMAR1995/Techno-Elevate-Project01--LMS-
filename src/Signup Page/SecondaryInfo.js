import React, { useState } from "react";
import {
  Button,
  Col,
  //   Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";

function SecondaryInfo() {
  const [secondaryinfo, setSecondaryinfo] = useState({
    PanNo: "",
    Aadharno: "",
    FathersName: "",
    MotherName: "",
    SpouseName: "",
    PassportNo: "",
    MaritalStatus: "",
  });

  let getSecondaryData = (e) => {
    setSecondaryinfo({
      ...secondaryinfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log(secondaryinfo);

  let DatasentToLocalStorage = () => {
    localStorage.setItem("SecondaryData", JSON.stringify(secondaryinfo));
  };
  let ValidateFunction = () => {
    if (
      secondaryinfo.PanNo &&
      secondaryinfo.Aadharno &&
      secondaryinfo.FathersName &&
      secondaryinfo.MotherName &&
      secondaryinfo.SpouseName &&
      secondaryinfo.PassportNo &&
      secondaryinfo.MaritalStatus
    ) {
      DatasentToLocalStorage();
      navigateNext();
    } else {
      alert("Please Fill all the feilds");
    }
  };

  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/EducationDetails");
  };

  let navigatePrevious = () => {
    navigate("/");
  };

  return (
    <div className="container fluid">
      <navbar style={{fontSize:"19px"}}>
        <Nav variant="scrollable" defaultActiveKey="/Primary">
          <Nav.Item>
            <Nav.Link href="/Primary">Primary Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/Secondary"
              style={{ color: "#086288", fontWeight: "600", fontSize: "48px" }}
            >
              Secondary Info
            </Nav.Link> <b>
              <hr
                style={{ width:"40%",
                  height: "5px",
                  background: "#faa81d",
                  paddingTop:"3px",
                  marginTop:"-5px"
                }}
              ></hr>
            </b>
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
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav.Item>
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
              PAN No.
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="text"
              name="PanNo"
              value={secondaryinfo.PanNo}
              onChange={getSecondaryData}
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
              Aadhar No.
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="text"
              name="Aadharno"
              value={secondaryinfo.Aadharno}
              onChange={getSecondaryData}
            />
          </Form.Group>
        </Row>
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
              Father Name
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="text"
              name="FathersName"
              value={secondaryinfo.FathersName}
              onChange={getSecondaryData}
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
              Mother Name
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="text"
              name="MotherName"
              value={secondaryinfo.MotherName}
              onChange={getSecondaryData}
            />
          </Form.Group>
        </Row>
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
              Spouse Name
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="text"
              name="SpouseName"
              value={secondaryinfo.SpouseName}
              onChange={getSecondaryData}
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
              Passport No.
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="text"
              name="PassportNo"
              value={secondaryinfo.PassportNo}
              onChange={getSecondaryData}
            />
          </Form.Group>
        </Row>
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
              Marital Status
            </Form.Label>
            <Form.Select
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              aria-label="Default select example"
              name="MaritalStatus"
              value={secondaryinfo.MaritalStatus}
              onChange={getSecondaryData}
            >
              <option></option>
              <option value="1">Single</option>
              <option value="2">Married</option>
              <option value="3">Divorced</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Navbar
            className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "
            expand="lg"
          >
            {/* <Container fluid> */}
            <Button variant="secondary" size="lg" onClick={navigatePrevious}>
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
            {/* </Container> */}
          </Navbar>
        </Row>
      </Form>
      {/* <EducationDetails/> */}
    </div>
  );
}
export default SecondaryInfo;
