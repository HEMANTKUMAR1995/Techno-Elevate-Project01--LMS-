import React from 'react'

function BatchDa() {
    let localstgBatchData=JSON.parse(localStorage.getItem("batchData"));
    console.log(localstgBatchData);
  return (
    <div>BATCHDATA</div>
  )
}
// const [dataForRequest, setDataForRequest] = useState([
  //     {
  //       EmployeeID: "",
  //       EmployeeName: "",
  //       YOP: "",
  //       Percentage: "",
  //       Experience: "",
  //       ContactNo: "",
  //     },
  //   ]);
  
  //   let BatchDataToBeMaped=()=>{
  // let data=JSON.parse(localStorage.getItem("PrimaryData"));
  // console.log(data.EmployeeID)
  //   }
  
  
  
  //   return (
  //     <div></div>
  //   )
  // }

export default BatchDa
