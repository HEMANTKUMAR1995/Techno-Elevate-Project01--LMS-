import React, { useState } from "react";
import { Navbar, Table, Dropdown, OverlayTrigger } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AddMockModal from "../Components/AddMockModal";
import GiveRatingModal from "../Components/GiveRatingModal";
import { Tooltip } from "antd";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { AiOutlineFileExcel } from "react-icons/ai";

const text = (
  <span className="emptext">
    <tr>
      <td style={{color:"black"}}>Mock 1</td>
      <td style={{color:"#8cda98"}}>Excellent</td>
    </tr>
    <tr>
      <td style={{color:"black"}}>Mock 2</td>
      <td style={{color:"#a5c7f4"}}>Good</td>
    </tr>
    <tr>
      <td style={{color:"black"}}>Mock 3</td>
      <td style={{color:"#d58a0a"}}>Average</td>
    </tr>
    <tr>
      <td style={{color:"black"}}>Mock 4</td>
      <td style={{color:"#dfbb0a"}}>Above Average</td>
    </tr>
    <tr>
      <td style={{color:"black"}}>Mock 5</td>
      <td style={{color:"#f27a96"}}>Below Average</td>
    </tr>
  </span>
);


function EmployeeBatch2() {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [addMockData, setAddMockData] = useState({
    batchId: "",
    mockNo: "",
    technology: "",
    panel: "",
    dateAndTime: "",
  });
  const [giveMockRatings, setGiveMockRati] = useState({
    mocktype: "",
    mockTakenBy: "",
    technology: "",
    praticalknowledge: "",
    theoriticalknowledege: "",
    overallfeedback: "",
    detailedfeedback: "",
  });

  // let tooltipShow = () => {};
  const color="#ffffff";
  return (
    <div>
      <GiveRatingModal
        shows={shows}
        setShows={setShows}
        giveMockRatings={giveMockRatings}
      />
      <AddMockModal show={show} setShow={setShow} addMockData={addMockData} />

      <Navbar style={{ height: "60px" }}>
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: "orange" }}>
            Employee List
            <span style={{ color: "black" }}>&#40;Batch ID&#41;</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div
                class="form-group has-search"
                style={{ marginRight: "20px" }}
              >
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  style={{ width: "400px" }}
                />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <AiOutlineFileExcel/>Download
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Employee Data</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Attendance Data</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Mock Data</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            onClick={() => setShow(true)}
            variant="warning"
            style={{ color: "white", marginLeft: "10px" }}
          >
            Create Mock
          </Button>
        </Container>
      </Navbar>
      <Table>
        <thead className="tableheading">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>No</th>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Mock Taken</th>
            <th>Mock Ratings</th>
            <th>Attendance</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" style={{ textAlign: "center" }} />
            </td>
            <td>01</td>
            <td>#15234654</td>
            <td>HEmant</td>
            <td>3/3</td>
            <td>
              <Tooltip placement="bottom" title={text} color={color}>
                <button
                  className="btntool"
                  style={{ border: "none", background: "#ffffff" }}
                >
                  <BsExclamationTriangleFill
                    className="BsExclamationTriangleFill"
                  />
                </button>
              </Tooltip>
            </td>
            <td>13/23</td>
            <td>
              <select name="status" id="cars" style={{ border: "0px" }}>
                <option value="completed">Active</option>
                <option value="inProgress">Absconded</option>
                <option value="pending">Terminated</option>
              </select>
            </td>
            <td>
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => setShows(true)}
              >
                &nbsp; Give Ratings
              </span>
              <span style={{ cursor: "pointer" }}>&nbsp; &gt;</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeBatch2;
