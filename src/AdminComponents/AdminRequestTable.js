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
      EMPOLYEES.map(
        ({
          a,
          No,
          EmployeeID,
          EmployeeName,
          YOP,
          Percentage,
          Experience,
          ContactNo,
        }) => {
          return (
            <tr key={No}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{No}</td>
              <td>{EmployeeID}</td>
              <td>{EmployeeName}</td>
              <td>{YOP}</td>
              <td>{Percentage}</td>
              <td>{Experience}</td>
              <td>{ContactNo}</td>
              <td className="Action">
                <button
                  className="ApproveButton"
                  onClick={() => {
                    alert("You Clicked On Edit Icon.......!");
                  }}
                >
                  Approve
                </button>{" "}
                &nbsp;{" "}
                <button className="Rejectbutton" onClick={() => setShow(true)}>
                  Reject
                </button>
              </td>
            </tr>
          );
        }
      )
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
