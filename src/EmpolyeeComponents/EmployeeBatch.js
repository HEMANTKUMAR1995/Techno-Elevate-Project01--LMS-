import React, { useState } from "react";
import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import { Navbar, Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import AttendenceModal from "../Components/AttendenceModal";
import { BsExclamationTriangle } from "react-icons/bs";
import { Tooltip } from "antd";

const text = (
  <span className="emptext">
    <tr>
      <td style={{color:"black"}}><b>Initial Strength</b></td>
      <td style={{ color: "#5593ad" }}><b>100</b></td>
    </tr>
    <tr>
      <td style={{color:"black"}}><b>Dropout</b></td>
      <td style={{ color: "#ee5074" }}><b>10</b></td>
    </tr>
    <tr>
      <td style={{color:"black"}}><b>Terminated</b></td>
      <td style={{ color: "#ee5074" }}><b>10</b></td>
    </tr>
    <tr>
      <td style={{color:"black"}}><b>Absconding</b></td>
      <td style={{ color: "#ee5074" }}><b>10</b></td>
    </tr>
    <tr>
      <td style={{color:"black"}}><b>Present Strength</b></td>
      <td style={{ color: "#5593ad" }}><b>70</b></td>
    </tr>
  </span>
);

function EmployeeBatch({ setPage }) {
  // console.log(a);
  let dataFromLocalStorage = [];
  dataFromLocalStorage = JSON.parse(localStorage.getItem("batchData"));
  const [show, setShow] = useState(false);

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
  const color="#ffffff";

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
          {dataFromLocalStorage.map((val, idx) => {
            return (
              <>
                <tr key={idx} style={{ background: "#ffffff" }}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{idx + 1}</td>
                  <td>{"TyssApril" + idx + "22"}</td>
                  <td>{val.BatchName}</td>
                  <td>{val.Mentorname}</td>
                  {/* <td>{val.Technologies}</td> */}
                  <td>
                    {val.Technologies.map((val, idx) => {
                      return (
                        <Chip
                          key={idx}
                          label={val.label}
                          style={{ backgroundColor: "#0c99d4" }}
                          className="ChipDesign"
                        />
                      );
                    })}
                  </td>
                  <td>{val.StartDate}</td>
                  <td>{val.EndDate}</td>
                  <td>
                    <select className="stauts" name="status" id="cars">
                      <option value="inProgress">InProgress</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td>
                  <Tooltip placement="bottom" title={text} 
                  color={color}> 
                <button className='btntool' style={{border:"none" ,background:"#ffffff"}} >
                    <BsExclamationTriangle className="BsExclamationTriangle" />
                    </button>
              </Tooltip>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setShow(true)}
                    >
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
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeBatch;
