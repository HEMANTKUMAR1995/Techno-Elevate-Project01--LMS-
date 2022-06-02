import React, { useState } from "react";
import { Button, Col, Form, Nav, Navbar, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

function Primary() {
  const [primaryinfo, setprimaryinfo] = useState({
    EmpolyeeId: "",
    EmpolyeeName: "",
    DateOfJoining: "",
    DateOfBirth: "",
    EmailId: "",
    BloodGroup: "",
    Designation: "",
    Gender: "",
    Nationality: "",
    EmpolyeeStatus: "",
  });
  let getPrimaryData = (e) => {
    setprimaryinfo({
      ...primaryinfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log(primaryinfo);

  let DatasentToLocalStorage = () => {
    localStorage.setItem("PrimaryData", JSON.stringify(primaryinfo));
  };
  let ValidateFunction = () => {
    if (
      primaryinfo.EmpolyeeId &&
      primaryinfo.EmpolyeeName &&
      primaryinfo.DateOfJoining &&
      primaryinfo.DateOfBirth &&
      primaryinfo.EmailId &&
      primaryinfo.BloodGroup &&
      primaryinfo.Designation &&
      primaryinfo.Gender &&
      primaryinfo.Nationality &&
      primaryinfo.EmpolyeeStatus
    ) {
      DatasentToLocalStorage();
      navigateNext();
    } else {
      alert("Please Fill all the feilds");
    }
  };

  let navigate = useNavigate();

  let navigateNext = () => {
    navigate("/SecondaryInfo");
  };
  return (
    <div className="container fluid">
      <navbar>
        <Nav variant="scrollable" defaultActiveKey="/Primary">
          <Nav.Item>
            <Nav.Link
              href="/Primary"
              style={{ color: "#086288", fontWeight: "600", fontSize: "48px" }}
            >
              Primary Info
            </Nav.Link>{" "}
            <b>
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
              Empolyee ID
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="text"
              name="EmpolyeeId"
              value={primaryinfo.EmpolyeeId}
              onChange={getPrimaryData}
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
              Empolyee Name
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="text"
              name="EmpolyeeName"
              value={primaryinfo.EmpolyeeName}
              onChange={getPrimaryData}
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
              Date of Joining
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="date"
              name="DateOfJoining"
              value={primaryinfo.DateOfJoining}
              onChange={getPrimaryData}
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
              Date of Birth
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="date"
              name="DateOfBirth"
              value={primaryinfo.DateOfBirth}
              onChange={getPrimaryData}
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
              E-mail ID
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="email"
              name="EmailId"
              value={primaryinfo.EmailId}
              onChange={getPrimaryData}
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
              Blood Group
            </Form.Label>
            <Form.Control
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              type="text"
              name="BloodGroup"
              value={primaryinfo.BloodGroup}
              onChange={getPrimaryData}
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
              Designation
            </Form.Label>
            <Form.Select
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              aria-label="Default select example"
              name="Designation"
              value={primaryinfo.Designation}
              onChange={getPrimaryData}
            >
              <option></option>
              <option value="1">Admin</option>
              <option value="2">Mentor</option>
              <option value="3">Empolyee/Trainee</option>
            </Form.Select>
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
              Gender
            </Form.Label>
            <Form.Select
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              aria-label="Default select example"
              name="Gender"
              value={primaryinfo.Gender}
              onChange={getPrimaryData}
            >
              <option></option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">TransGender</option>
            </Form.Select>
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
              Nationality
            </Form.Label>
            <Form.Select
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              aria-label="Default select example"
              name="Nationality"
              value={primaryinfo.Nationality}
              onChange={getPrimaryData}
            >
              <option></option>
              <option value="1">Indian</option>
              <option value="2">NRI</option>
              <option value="3">....!</option>
            </Form.Select>
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
              Empolyee Status
            </Form.Label>
            <Form.Select
              style={{ width: "540px", height: "64px", fontSize: "20px" }}
              aria-label="Default select example"
              name="EmpolyeeStatus"
              value={primaryinfo.EmpolyeeStatus}
              onChange={getPrimaryData}
            >
              <option></option>
              <option value="1">Applied</option>
              <option value="2">Appointed</option>
              <option value="3">Declined</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Navbar
            className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "
            expand="lg"
          >
            {/* <Container fluid> */}
            <Button variant="secondary" size="lg">
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
      {/* <SecondaryInfo /> */}
    </div>
  );
}

export default Primary;
