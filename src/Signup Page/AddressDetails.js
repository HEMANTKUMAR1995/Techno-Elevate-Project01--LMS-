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

function AddressDetails() {
  const [addressDetails, setAddressDetails] = useState({
    AddressType: "",
    DoorNumber: "",
    Street: "",
    Locality: "",
    City: "",
    State: "",
    pinCode: "",
    LandMark: "",
  });

  let getAddressDetails = (e) => {
    setAddressDetails({ ...addressDetails, [e.target.name]: e.target.value });
  };

  console.log(addressDetails);

  let DatasentToLocalStorage = () => {
    localStorage.setItem("AddressDetails", JSON.stringify(addressDetails));
  };
  let ValidateData = () => {
    if (
      addressDetails.AddressType &&
      addressDetails.DoorNumber &&
      addressDetails.Street &&
      addressDetails.Locality &&
      addressDetails.City &&
      addressDetails.State &&
      addressDetails.pinCode &&
      addressDetails.LandMark
    ) {
      DatasentToLocalStorage();
      navigateNext();
    } else {
      alert("Please Fill all the feilds");
    }
  };

  let navigate = useNavigate();
  let navigateNext = () => {
    navigate("/BankDetails");
  };
  let navigatePrevious = () => {
    navigate("/EducationDetails");
  };
  return (
    <div>
      <div className="container fluid">
        <navbar>
          <Nav variant="scrollable" defaultActiveKey="/AddressDetails">
            <Nav.Item>
              <Nav.Link href="/">Primary Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/SecondaryInfo">Secondary Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/EducationDetails">Education Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/AddressDetails"
                style={{
                  color: "#086288",
                  fontWeight: "600",
                  fontSize: "48px",
                }}
              >
                Address Details
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
              <Nav.Link href="/BankDetails">Bank Details</Nav.Link>
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
                Address Type
              </Form.Label>
              <Form.Select
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                aria-label="Default select example"
                name="AddressType"
                value={addressDetails.AddressType}
                onChange={getAddressDetails}
              >
                <option></option>
                <option value="Permanent">Permanent</option>
                <option value="Temperory">Temperory</option>
                <option value="office">office</option>
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
                Door No.
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="DoorNumber"
                value={addressDetails.DoorNumber}
                onChange={getAddressDetails}
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
                Street
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="Street"
                value={addressDetails.Street}
                onChange={getAddressDetails}
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
                Locality
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="Locality"
                value={addressDetails.Locality}
                onChange={getAddressDetails}
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
                City
              </Form.Label>
              <Form.Select
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                aria-label="Default select example"
                name="City"
                value={addressDetails.City}
                onChange={getAddressDetails}
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bhubaneswar">Bhubaneswar</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Bihar">Bihar</option>
                <option value="Delhi">Delhi</option>
                <option value="Other">Other....</option>
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
                State
              </Form.Label>
              <Form.Select
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                aria-label="Default select example"
                name="State"
                value={addressDetails.State}
                onChange={getAddressDetails}
              >
                <option value="Karnataka">Karnataka</option>
                <option value="Maharastara">Maharastara</option>
                <option value="Odisha">Odisha</option>
                <option value="WestBengal">WestBengal</option>
                <option value="Chattisgadh">Chattisgadh</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
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
                PIN Code
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="pinCode"
                Value={addressDetails.pinCode}
                onChange={getAddressDetails}
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
                Land Mark
              </Form.Label>
              <Form.Control
                style={{ width: "540px", height: "64px", fontSize: "20px" }}
                type="text"
                name="LandMark"
                value={addressDetails.LandMark}
                onChange={getAddressDetails}
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
                  <Button variant="primary" size="lg" onClick={ValidateData}>
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

export default AddressDetails;
