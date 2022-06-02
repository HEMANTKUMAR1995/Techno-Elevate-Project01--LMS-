import React, { useState } from "react";

function DataTransfer() {

const [empData, setempData] = useState({
    yop:{},
    empID:{},
    empName:{},
    yearsOfExp:{},
    contact:{},
    percent:{},
});

const [employee, setemployee] = useState([])

let getYOP = JSON.parse(localStorage.getItem("Technical Details"));
let getEMpId = JSON.parse(localStorage.getItem("PrimaryData"));
let getEmpName = JSON.parse(localStorage.getItem("PrimaryData"));
let getExp = JSON.parse(localStorage.getItem("Technical Details"));
let getPercentage = JSON.parse(localStorage.getItem("EducationDetails"));
let getContactno = JSON.parse(localStorage.getItem("contact Details"));
//  console.log("getYOP",getYOP);

setempData({
    yop:getYOP,
    empID:getEMpId,
    empName:getEmpName,
    yearsOfExp:getExp,
    contact:getContactno,
    percent:getPercentage,
})

console.log("empData>>",empData)
  
let employeeCopy=[...employee];
employeeCopy.push(empData)
setemployee(employeeCopy)

console.log("employee>>",employee);

// console.log("DataTransfer");

  return (
    <div>
        <h1>Hello</h1>
    </div>
  );
}

export default DataTransfer;
