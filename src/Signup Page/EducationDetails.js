import React, { useState } from "react";
import {
  Button,
  Col,
  // Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";
// import AddressDetails from './AddressDetails';

function EducationDetails() {
  const [educationdetails, setEducationdetails] = useState({
    EducationType: "",
    YearOfpassing: "",
    PerCenTage: "",
    UnivercityName: "",
    InstituteName: "",
    Specilization: "",
    State: "",
  });

  let getEducationData = (e) => {
    setEducationdetails({
      ...educationdetails,
      [e.target.name]: e.target.value,
    });
  };
  console.log(educationdetails);
  let DatasentToLocalStorage = () => {
    localStorage.setItem("EducationDetails", JSON.stringify(educationdetails));
  };
  let ValidateFunction = () => {
    if (
      educationdetails.EducationType &&
      educationdetails.YearOfpassing &&
      educationdetails.PerCenTage &&
      educationdetails.UnivercityName &&
      educationdetails.InstituteName &&
      educationdetails.Specilization &&
      educationdetails.State
    ) {
      DatasentToLocalStorage();
      navigateNext();
    } else {
      alert("Please Fill all the feilds");
    }
  };

  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/AddressDetails");
  };

  let navigatePrevious = () => {
    navigate("/SecondaryInfo");
  };
  return (
    <div>
      {" "}
      <div className="container fluid">
        <navbar>
          <Nav variant="scrollable" defaultActiveKey="/EducationDetails">
            <Nav.Item>
              <Nav.Link href="/Primary">Primary Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/SecondaryInfo">Secondary Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/EducationDetails"
                style={{
                  color: "#086288",
                  fontWeight: "600",
                  fontSize: "48px",
                }}
              >
                Education Details
              </Nav.Link> <b>
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
              <Nav.Link href="/AddressDetails">Address Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="BankDetails">Bank Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/TechnicalSkills">Technical Skills</Nav.Link>
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
              controlId="formGridEmail"
            >
              <Form.Label
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "21px",
                  color: "#707070",
                }}
              >
                Education Type
              </Form.Label>
              <Form.Select
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                aria-label="Default select example"
                name="EducationType"
                value={educationdetails.EducationType}
                onChange={getEducationData}
              >
                <option></option>
                <option value="Masters">Masters</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Under-Graduate">Under Graduate</option>
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
                Year Of Passing
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="YearOfpassing"
                value={educationdetails.YearOfpassing}
                onChange={getEducationData}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              //   controlId="formGridEmail"
            >
              <Form.Label
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "21px",
                  color: "#707070",
                }}
              >
                Percentage(%)
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="percentage"
                name="PerCenTage"
                value={educationdetails.PerCenTage}
                onChange={getEducationData}
              />
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              as={Col}
              //   controlId="formGridPassword"
            >
              <Form.Label
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "21px",
                  color: "#707070",
                }}
              >
                University Name
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="UnivercityName"
                value={educationdetails.UnivercityName}
                onChange={getEducationData}
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
                Institute Name
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="InstituteName"
                value={educationdetails.InstituteName}
                onChange={getEducationData}
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
                Specialization
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="Specilization"
                value={educationdetails.Specilization}
                onChange={getEducationData}
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
                State
              </Form.Label>
              <Form.Select
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                aria-label="Default select example"
                name="State"
                value={educationdetails.State}
                onChange={getEducationData}
              >
                <option value="Karnataka">Karnataka</option>
                <option value="Maharastara">Maharastara</option>
                <option value="Odisha">Odisha</option>
                <option value="WestBengal">WestBengal</option>
                <option value="Chattisgadh">Chattisgadh</option>
                <option value="Other...">Other...</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <p style={{ marginLeft: "550px" }}>
              <b>Add</b>
            </p>
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
        {/* <AddressDetails/> */}
      </div>
    </div>
  );
}

export default EducationDetails;
