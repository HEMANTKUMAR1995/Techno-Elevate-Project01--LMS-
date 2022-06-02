import { Chip } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
function AdminMentorTable({ }) {
  return (
    <div>
      <Table>
        <thead className="tableheading">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>No</th>
            <th>Mentor Name</th>
            <th>Employee ID</th>
            <th>Email ID</th>
            <th>skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>01</td>
            <td>Satyan Saurav</td>
            <td>#0000001</td>
            <td>Sat01@technoelevate.com</td>
            <td>
             
              <Chip className="ChipDesign" label="React" style={{backgroundColor:"#0c99d4"}}/>
              <Chip className="ChipDesign" label="Java" style={{backgroundColor:"#0c99d4"}}/>
              <Chip className="ChipDesign" label="Sql" style={{backgroundColor:"#0c99d4"}}/>
            </td>
            <td>
              <button
                style={{ border: "none" }}
                onClick={() => {
                  alert("You Clicked On Edit Icon.......!");
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </button>{" "}
              &nbsp;{" "}
              <button
                style={{ border: "none" }}
                onClick={() => {
                  alert("You Clicked On Delete Icon");
                }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>02</td>
            <td>Shantala</td>
            <td>#0000002</td>
            <td>Santa02@technoelevate.com</td>
            <td>
            
              <Chip className="ChipDesign" label="React" style={{backgroundColor:"#0c99d4"}}/>
              <Chip className="ChipDesign" label="Java" style={{backgroundColor:"#0c99d4"}}/>
              <Chip className="ChipDesign" label="Sql" style={{backgroundColor:"#0c99d4"}}/>
            </td>
            <td>
              <button
                style={{ border: "none" }}
                onClick={() => {
                  alert("You Clicked On Edit Icon.......!");
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </button>{" "}
              &nbsp;{" "}
              <button
                style={{ border: "none" }}
                onClick={() => {
                  alert("You Clicked On Delete Icon");
                }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminMentorTable;
