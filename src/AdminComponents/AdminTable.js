import React, { useState } from "react";
import { Button, Container, Form, Modal, Navbar, Table } from "react-bootstrap";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { fontSize } from "@mui/system";
// import './AdminBatch.css'

function AdminTable() {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [batchModalData, setBatchModalData] = useState({
    BatchName: "",
    Mentorname: "",
    Technologies: "",
    StartDate: new Date(),
    EndDate: new Date(),
  });
  const handleDelete = () => {
    alert("You Clicked On Remove Button........!");
  };
  let functionOnEditClick = () => {
    handleShow();
    // alert("You Clicked On Edit Icon.......!");
  };
  let functionOnDeleteClick = () => {
    alert("You Clicked On Delete Icon");
  };
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);
  let HandelChangeInModal = (e) => {
    setBatchModalData({ ...batchModalData, [e.target.name]: e.target.value });
  };
  let handleClose1 = () => {
    setStatus(false);
    alert("Sucessfully Updated");
  };
  let handleShow2 = () => setStatus(true);
  // let changeStatus = (e) => {
  //   setBatchModalData({ ...batchModalData, [e.target.name]: e.target.value });
  // };

  console.log(batchModalData);
  return (
    <div>
      <>
        <Modal show={status} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Change Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Batch Name</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  // name="Mentorname"
                  // value={batchModalData.Mentorname}
                  // onChange={HandelChangeInModal}
                >
                  <option>.....</option>
                  <option value="java">Java</option>
                  <option value="React">React</option>
                  <option value="C#">C#</option>
                  <option value="More">........</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Batch ID</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  // name="Mentorname"
                  // value={batchModalData.Mentorname}
                  // onChange={HandelChangeInModal}
                >
                  <option>.....</option>
                  <option value="01">TYSS01</option>
                  <option value="02">TYSS02</option>
                  <option value="03">TYSS03</option>
                  <option value="04">........</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose1}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New batch </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Batch Name</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="BatchName"
                  value={batchModalData.BatchName}
                  onChange={HandelChangeInModal}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mentor Name</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="Mentorname"
                  value={batchModalData.Mentorname}
                  onChange={HandelChangeInModal}
                >
                  <option>.....</option>
                  <option value="1">Styam</option>
                  <option value="2">Shantala</option>
                  <option value="3">Ajay</option>
                  <option value="3">........</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Technologies</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="Technologies"
                  value={batchModalData.Technologies}
                  onChange={HandelChangeInModal}
                >
                  <option>.....</option>
                  <option value="1">SQL Data-Base</option>
                  <option value="2">React</option>
                  <option value="3">java Script</option>
                  <option value="3">HTML/CSS</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="Date"
                  autoFocus
                  name="StartDate"
                  value={batchModalData.StartDate}
                  onChange={HandelChangeInModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="Date"
                  autoFocus
                  name="EndDate"
                  value={batchModalData.EndDate}
                  onChange={HandelChangeInModal}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <div>
        <Navbar style={{ height: "60px" }}>
          <Container fluid>
            <Navbar.Brand href="#home" style={{ color: "orange" }}>
              Batch List
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <div
                  className="form-group has-search"
                  style={{ marginRight: "20px" }}
                >
                  <span className="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    style={{ width: "400px" }}
                  />
                </div>
              </Navbar.Text>
            </Navbar.Collapse>
            <Button
              onClick={handleShow}
              variant="warning"
              style={{ padding: "5px 10px", color: "#f4f5f8" }}
            >
              <i className="fa-solid fa-plus"></i> &nbsp;+ New Batch
            </Button>
          </Container>
        </Navbar>
        <Table className="table-heading">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>No</th>
              <th>Batch Id</th>
              <th>Batch Name</th>
              <th>Mentor Name</th>
              <th>Technologies</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: "#ffffff" }}>
              <td>
                <input type="checkbox" />
              </td>
              <td>01</td>
              <td>#TySS02022De</td>
              <td>Uplift2022</td>
              <td>Deepti</td>
              <td>
                {/* <Stack direction="row" spacing={0.5}>
                  {chips.map((val) => {
                    return (
                      <Chip
                        key={val}
                        className="chip"
                        label={val}
                        variant="outlined"
                        onDelete={handleDelete}
                        style={{ background: "#0c99d4" }}
                      />
                    );
                  })}
                </Stack> */}
                <Chip className="ChipDesign" label="React" style={{backgroundColor:"#0c99d4"}}/>
              <Chip className="ChipDesign" label="Java" style={{backgroundColor:"#0c99d4"}}/>
              <Chip className="ChipDesign" label="Sql" style={{backgroundColor:"#0c99d4"}}/>
              </td>
              <td>28 Mar 2022</td>
              <td>..............</td>
              <td>
                <select
                  name="status"
                  id="cars"
                  onChange={handleShow2}
                  style={{ border: "0px", fontSize: "20px" }}
                >
                  <option value="inProgress" style={{ color: "#e5cb41" }}>
                    InProgress
                  </option>
                  <option value="pending" style={{ color: "#dff7e5" }}>
                    Pending
                  </option>
                  <option value="completed" style={{ color: "#bde0f8" }}>
                    Completed
                  </option>
                </select>
              </td>
              <td>
                <button
                  style={{ border: "none" }}
                  onClick={functionOnEditClick}
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
                &nbsp;
                <button
                  style={{ border: "none" }}
                  onClick={functionOnDeleteClick}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AdminTable;
