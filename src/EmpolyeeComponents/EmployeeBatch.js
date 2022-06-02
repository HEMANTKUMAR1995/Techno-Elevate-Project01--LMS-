import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Navbar, Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import AttendenceModal from "../Components/AttendenceModal";
import { AiFillAlert } from "react-icons/ai";

function EmployeeBatch({ setPage }) {
  const [show,setShow] = useState(false);

  let date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let datevalue = `(${date.getDate()} ${monthName[month]} ${year})`;
  // console.log(date.getDate (), monthName[month-1],year);
  // date = date.toLocaleDateString();
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };


  return (
    <div>
      <AttendenceModal show={show} setShow={setShow} datevalue={datevalue} />
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
        </Container>
      </Navbar>
      <Table>
        <thead className="tableheading">
          <tr key={0}>
            <th>
              <input type="checkbox" />
            </th>
            <th>No</th>
            <th>Batch Id</th>
            <th>Batch Name</th>
            <th>Technologies</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Batch Strength</th>
          </tr>
        </thead>
        <tbody>
          <tr key={1}>
            <td>
              <input type="checkbox" />
            </td>
            <td>01</td>
            <td>#15234654</td>
            <td>abcd</td>
            <td >
              <Chip className="ChipDesign" label="React" style={{backgroundColor:"#0c99d4"}}/>
              <Chip className="ChipDesign" label="Java" style={{backgroundColor:"#0c99d4"}}/>
              <Chip className="ChipDesign" label="Sql" style={{backgroundColor:"#0c99d4"}}/>
            </td>
            <td>12 Mar 2022</td>
            <td>04 Dec 2022</td>
            <td>
              <select className="stauts" name="status" id="cars">
                <option value="inProgress">InProgress</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </td>
            <td>
            <AiFillAlert/>
              <span style={{ cursor: "pointer" }} onClick={() => setShow(true)}>
                &nbsp; Attendance
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setPage("EmployeeList2")}
              >
                &nbsp; &gt;
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeBatch;
