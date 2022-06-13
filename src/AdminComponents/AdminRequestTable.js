import React from "react";
import { Table } from "react-bootstrap";
import { EMPOLYEES } from "../Data/EMPLOYEES.js";

function AdminRequestTable({ show, setShow }) {
  let renderhead = () => {
    let tableheadercontent = [
      "",
      "No",
      "Employee ID",
      "Employee Name",
      "YOP",
      "Percentage",
      "Experience (in years)",
      "Contact No.",
      "Action",
    ];
    return tableheadercontent.map((key, idx) => <th key={idx}>{key}</th>);
  };

 

  let renderBody = () => {
    return (
      EMPOLYEES &&
      EMPOLYEES.map((val, i) => {
        return (
          <tr key={i}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{val.No}</td>
            <td>{val.EmployeeID}</td>
            <td>{val.EmployeeName}</td>
            <td>{val.YOP}</td>
            <td>{val.Percentage}</td>
            <td>{val.Experience}</td>
            <td>{val.ContactNo}</td>
            <td className="Action">
              <button
                className="ApproveButton"
                style={{padding:"3px"}}
                onClick={() => {
                  alert("You Clicked On Edit Icon.......!");
                }}
              >
               &nbsp; Approve &nbsp;
              </button>
              &nbsp;
              <button className="Rejectbutton" style={{padding:"3px"}} onClick={() => setShow(true)}>
                &nbsp; Reject &nbsp;
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

export default AdminRequestTable;
