import React, { useState } from "react";
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormSelect,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import RequestSubmitModal from "./RequestSubmitModal";
// import Primary from './Primary';

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [dataForRequest, setDataForRequest] = useState([
  //   {
  //     EmployeeID: "",
  //     EmployeeName: "",
  //     YOP: "",
  //     Percentage: "",
  //     Experience: "",
  //     ContactNo: "",
  //   },
  // ]);

  const [contactdetails, setContactdetails] = useState({
    ContactType: "",
    ContactNumber: "+91",
  });

  let getContactData = (e, index) => {
    // setContactdetails({
    //   ...contactdetails,
    //   [e.target.name]: e.target.value,
    // });
    const { name, value } = e.target;
    let ContactListCpy = contactdetails.map((item, idx) => {
      if (idx === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setContactdetails(ContactListCpy);
  };

  let deleteContactData = (e, ind) => {
    e.preventDefault();
    const list = [...contactdetails];
    list.splice(ind, 1);
    setContactdetails(list);
  };
  let addContactData = () => {
    setContactdetails([
      ...contactdetails,
      {
        ContactType: "",
        ContactNumber: "",
      },
    ]);
  };

  let DatasentToLocalStorage = () => {
    localStorage.setItem("contact Details", JSON.stringify(contactdetails));
  };
  let ValidateFunction = () => {
    if (contactdetails.ContactType && contactdetails.ContactNumber) {
      DatasentToLocalStorage();
      console.log(contactdetails);
    } else {
      alert("Please Fill all the feilds");
    }
  };

  let navigate = useNavigate();

  let navigatePrevious = () => {
    navigate("/TechnicalSkills");
  };
  return (
    <div>
      <div className="container fluid">
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
                style={{
                  color: "#086288",
                  fontWeight: "600",
                  fontSize: "48px",
                }}
              >
                Contact
              </Nav.Link>
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
          </Nav>
        </navbar>
        {/* Accordian started */}
        <Accordion defaultActiveKey="0" />
        <Accordion.Item eventKey="0" />
        <Accordion.Header>Contact</Accordion.Header>
        <Accordion.Body>
          {
            contactdetails.map((val, idx) => {
            return (
              <Form className="container fluid  mt-3 square border border-light border-4 rounded-3">
                <Row className="mb-3">
                  <FormSelect
                    style={{ textAlign: "left" }}
                    as={Col}
                    label={"Contact Type"}
                    name="ContactType"
                    value={val.ContactType}
                    onChange={(e) => getContactData(e, idx)}
                    // options={ContactType}
                  />
                  <FormControl
                    style={{ textAlign: "left" }}
                    as={Col}
                    label={"Contact Number"}
                    type="tel"
                    name="ContactNumber"
                    value={val.ContactNumber}
                    onChange={(e) => getContactData(e, idx)}
                  />
                  <div style={{ textAlign: "end" }}>
                    {contactdetails.length !== 1 && (
                      <button
                        onClick={(e) => {
                          deleteContactData(e, idx);
                        }}
                        className="btn btn-outline-primary p-1 m-2"
                      >
                        Remove
                      </button>
                    )}
                    {contactdetails.length - 1 === idx && (
                      <p
                        onClick={addContactData}
                        style={{ textAlign: "end", cursor: "pointer" }}
                      >
                        <i class="fa-solid fa-plus"></i>
                        <b>➕ Add</b>
                      </p>
                    )}
                  </div>
                </Row>
              </Form>
            );
          })}
        </Accordion.Body>
        {/* Accordian Ended */}
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
                type="text"
                name="ContactType"
                value={contactdetails.ContactType}
                onChange={getContactData}
              >
                <option></option>
                <option value="Resedence">Resedence</option>
                <option value="Office">Office</option>
                <option value="Personal">Personal</option>
                <option value="Relative">Relative</option>
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
            <p style={{ marginLeft: "600px", marginTop: "20px" }}>
              <b> Add</b>
            </p>
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
                    Submit
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

export default Contact;
