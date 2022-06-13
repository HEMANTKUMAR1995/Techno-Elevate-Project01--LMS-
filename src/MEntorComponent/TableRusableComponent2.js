import React from "react";

function TableRusableComponent2({ firstLineData, TableHeading, secondData }) {
  return (
    <div>
      <table  cellPadding="10px" cellSpacing="10px">
        <thead>
          <tr>
            <th>{TableHeading}</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            {firstLineData.map((value, ind) => {
              return Object.keys(value).map((val, index) => {
                return (
                  <td key={index}>
                    {val}:{val[value]}
                  </td>
                );
              });
            })}
          </tr>
          <tr>
            {secondData.map((value, ind) => {
              return Object.keys(value).map((val, index) => {
                return (
                  <td key={index}>
                    {val}:{val[value]}
                  </td>
                );
              });
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableRusableComponent2;
