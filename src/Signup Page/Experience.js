import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";

function Experience() {
  const [experincedata, setExperincedata] = useState({
    CompanyName: "",
    YearOfExperience: "",
    DateOfJoining: "",
    DateOfRelieving: "",
    Designation: "",
    Location: "",
  });

  let getExperienceData = (e) => {
    setExperincedata({ ...experincedata, [e.target.name]: e.target.value });
  };
  console.log(experincedata);

  let DatasentToLocalStorage = () => {
    localStorage.setItem("Experience Details", JSON.stringify(experincedata));
  };
  let ValidateFunction = () => {
    if (
      experincedata.CompanyName &&
      experincedata.YearOfExperience &&
      experincedata.DateOfJoining &&
      experincedata.DateOfRelieving &&
      experincedata.Designation &&
      experincedata.Location
    ) {
      DatasentToLocalStorage();
      navigateNext();
    } else {
      alert("Please Fill all the feilds");
    }
  };
  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/Contact");
  };
  let navigatePrevious = () => {
    navigate("/TechnicalSkills");
  };
  return (
    <div>
      <div className="container fluid">
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
              <Nav.Link href="/TechnicalSkills">Technical Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Secondary"
                style={{
                  color: "#086288",
                  fontWeight: "600",
                  fontSize: "48px",
                }}
              >
                Experience
              </Nav.Link>{" "}
              <b>
                <hr
                  style={{
                    width: "40%",
                    height: "5px",
                    background: "#f29a27",
                    paddingTop: "3px",
                    marginTop: "-5px",
                  }}
                ></hr>
              </b>
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
              controlId="formGridPassword"
            >
              <Form.Label
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "21px",
                  color: "#707070",
                }}
              >
                Company Name
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="CompanyName"
                value={experincedata.CompanyName}
                onChange={getExperienceData}
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
                Years Of Experience
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                aria-label="Default select example"
                type="number"
                name="YearOfExperience"
                value={experincedata.YearOfExperience}
                onChange={getExperienceData}
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
                Date Of Joining
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="date"
                name="DateOfJoining"
                value={experincedata.DateOfJoining}
                onChange={getExperienceData}
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
                Date Of Relieving
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="date"
                name="DateOfRelieving"
                value={experincedata.DateOfRelieving}
                onChange={getExperienceData}
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
                Designation
              </Form.Label>
              <Form.Select
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                aria-label="Default select example"
                name="Designation"
                value={experincedata.Designation}
                onChange={getExperienceData}
              >
                <option></option>
                <option value="Front-End Developer">Front-End Developer</option>
                <option value="Back-End Developer">Back-End Developer</option>
                <option value="Full-Skack Developer">
                  Full-Skack Developer
                </option>
                <option value=".Net Developer">.Net Developer</option>
                <option value="Manual test Engineer">
                  Manual test Engineer
                </option>
                <option value="Automation test Engineer">
                  Automation test Engineer
                </option>
                <option value="Software Engineer">Software Engineer</option>
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
                Location
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="Location"
                value={experincedata.Location}
                onChange={getExperienceData}
              />
            </Form.Group>
          </Row>
          <Row>
            <Navbar
              className="container fluid  col-8 mt-5 square border border-light border-4 rounded-3 "
              expand="lg"
            >
              <Container fluid>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={navigatePrevious}
                >
                  Previous
                </Button>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                ></Nav>
                <Form className="d-flex">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={ValidateFunction}
                  >
                    Next
                  </Button>
                </Form>
              </Container>
            </Navbar>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Experience;
