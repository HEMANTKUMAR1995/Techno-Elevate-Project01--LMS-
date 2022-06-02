import React, { useState } from "react";

function DataTensfer() {
//   const [localStorageData, setLocalStorageData] = useState({
//       yop:{},
//       empID:{},
//       empName:{},
//       yearsOfExp:{},
//       contact:{},
//       percent:{},
// });

const [empData, setempData] = useState({
    yop:{},
    empID:{},
    empName:{},
    yearsOfExp:{},
    contact:{},
    percent:{},
});

const [employee, setemployee] = useState([])


// let AssignDataToLocalStorageState=(a,b,c,d,e,f)=>{
//     setLocalStorageData({...localStorageData.push(a,b,c,d,e,f)})
// }
// console.log(localStorageData);
// let collectiveDataForAdmin=()=>{
//     AssignDataToLocalStorageState(getEMpId.empid,getEmpName.EmpolyeeName,getYOP,getPercentage,getExp,getContactno)
//     getEMpId.map((val) => {
//        let empid= val.EmpolyeeId
//         return empid;
//     }) 
//     getEmpName.map((val) => {
//         return val.EmpolyeeName;
//     })  
//     getYOP.map((val) => {
//         return val.YearOfpassing;
//     })
//     getPercentage.map((val) => {
//         return val.PerCenTage;
//     })
//     getExp.map((val) => {
//         return val.YEarOfExperience;
//     })
//     getContactno.map((val) => {
//         return val.ContactNumber;
//       })    
// }


//   let getYOP = [JSON.parse(localStorage.getItem("Technical Details"))];
//   let getEMpId = [JSON.parse(localStorage.getItem("PrimaryData"))];
//   let getEmpName = [JSON.parse(localStorage.getItem("PrimaryData"))];
//   let getExp = [JSON.parse(localStorage.getItem("Technical Details"))];
//   let getPercentage = [JSON.parse(localStorage.getItem("EducationDetails"))];
//   let getContactno = [JSON.parse(localStorage.getItem("contact Details"))];

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

  return (
    <div>
      {/* {getEMpId.map((val) => {
        return val.EmpolyeeId;
      })}
      <br />
      {getEmpName.map((val) => {
        return val.EmpolyeeName;
      })}
      <br />
      {getYOP.map((val) => {
        return val.YearOfpassing;
      })}
      <br />
      {getPercentage.map((val) => {
        return val.PerCenTage;
      })}
      <br />
      {getExp.map((val) => {
        return val.YEarOfExperience;
      })}
      <br />
      {getContactno.map((val) => {
        return val.ContactNumber;
      })} */}

{/* <button onClick={collectiveDataForAdmin}>test</button> */}

    </div>
  );
}

export default DataTensfer;
