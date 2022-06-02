import React, { useState } from "react";
import {
  Navbar,
  Table,
  Dropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AddMockModal from "../Components/AddMockModal";
import GiveRatingModal from "../Components/GiveRatingModal";

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
  return (
    <div>
      <GiveRatingModal
        shows={shows}
        setShows={setShows}
        addMockData={addMockData}
      />
      <AddMockModal 
      show={show} 
      setShow={setShow}
      addMockData={addMockData} 
      />

      <Navbar style={{ height: "60px" }}>
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: "orange" }}>
            Employee List{" "}
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
              Download
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
              {/* <OverlayTrigger
                placement="right-start"
                overlay={
                  <Tooltip id="tooltip-5" variant="light">
                    <Table variant="light">
                      <tbody variant="light">
                        <tr>
                          <td>Mock 1</td>
                          <td style={{ color: "green" }}>Excellent</td>
                        </tr>
                        <tr>
                          <td>Mock 2</td>
                          <td style={{ color: "yellow" }}>Good</td>
                        </tr>
                        <tr>
                          <td>Mock 3</td>
                          <td style={{ color: "Brown" }}>Above Average</td>
                        </tr>
                        <tr>
                          <td>Mock 4</td>
                          <td style={{ color: "red" }}>Average</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <Button
                    variant="light"
                    // className="d-inline-flex align-items-center"
                  >
                    <i
                      ref={ref}
                      {...triggerHandler}
                      class="fa-solid fa-triangle-exclamation"
                      style={{ fontSize: "35px", color: "yellow" }}
                    ></i>
                  </Button>
                )}
              </OverlayTrigger> */}
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
