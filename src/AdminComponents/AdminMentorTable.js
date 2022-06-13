import React from "react";
import { Chip } from "@mui/material";
import { Table } from "react-bootstrap";
import {MdDelete} from 'react-icons/md'
import { BsFillPencilFill } from "react-icons/bs";


function AdminMentorTable() {
  let renderhead = () => {
    let tableheadercontent = [
      "",
      "Mentor Name",
      "Email",
      "EmployeeID",
      "Skills",
      "Action",
    ];
    return tableheadercontent.map((key, idx) => <th key={idx}>{key}</th>);
  };
  let MENTORS = [];
  if (localStorage.length !== 0) {
  MENTORS = JSON.parse(localStorage.getItem("mentorData"));
  }
  let renderBody = () => {
    return (
      MENTORS &&
      MENTORS.map((val, i) => {
        return (
          <tr key={i}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{val.mentorname}</td>
            <td>{val.employeeid}</td>
            <td>{val.mentoremail}</td>
            <td>
              {val.mentorskills.map((val, i) => {
                return (
                  <Chip
                    key={i}
                    className="ChipDesign"
                    label={val.label}
                    style={{ backgroundColor: "#0c99d4" }}
                  />
                );
              })}
            </td>
            <td>
              <button
                style={{ border: "none" }}
                onClick={() => {
                  alert("You Clicked On Edit Icon.......!");
                }}
              >
                <BsFillPencilFill/>
              </button>{" "}
              &nbsp;{" "}
              <button
                style={{ border: "none" }}
                onClick={() => {
                  alert("You Clicked On Delete Icon");
                }}
              >
                <MdDelete/>
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <Table>
      <thead className="tableheading">
        <tr>{renderhead()}</tr>
      </thead>
      <tbody>{renderBody()}</tbody>
    </Table>
  );
}

export default AdminMentorTable;
