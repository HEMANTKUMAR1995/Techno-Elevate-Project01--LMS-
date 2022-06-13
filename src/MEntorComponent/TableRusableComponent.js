import React from "react";
import { Table } from "react-bootstrap";

function TableRusableComponent({
  Heading,
  empid,
  empname,
  doj,
  dob,
  sal,
  blood,
  role,
  sex,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
}) {
  return (
    <div>
      <Table cellPadding="10px" className="R-Table">
        <tr>
          <th className="EmployeeData-headings">{Heading}</th>
        </tr>
        <tr>
          <td>{h1}:-</td>
          <td className="bold">{empid}</td>
          <td>{h2}:-</td>
          <td className="bold">{empname}</td>
          <td>{h3}:-</td>
          <td className="bold">{doj}</td>
          <td>{h4}:-</td>
          <td className="bold">{dob}</td>
        </tr>
        {/* </div> */}
        <br />
        <br />
        <tr>
          <td>{h5}:--</td>
          <td className="bold">{sal}</td>
          <td>{h6}:--</td>
          <td className="bold">{blood}</td>
          <td>{h7}:--</td>
          <td className="bold">{role}</td>
          <td>{h8}:--</td>
          <td className="bold">{sex}</td>
        </tr>
      </Table>
    </div>
  );
}

export default TableRusableComponent;
