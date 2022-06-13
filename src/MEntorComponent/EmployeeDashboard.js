import React from "react";
import { Button } from "react-bootstrap";
import TopNavbar from "../Components/TopNavbar";

function EmployeeDashboard() {
  return (
    <div>
      <TopNavbar />
      <div
        className="col-lg-1 col-sm-1 col-md-1"
        style={{
          width: "80px",
          height: "95vh",
          boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
        }}
      >
        <br />
        <Button>
          <img
            style={{ width: "25px" }}
            src={require("./../Assests/Batch.png")}
            alt=""
          />
        </Button>
      </div>
      <div
        className="col-lg-11 col-sm-11 col-md-11">

        </div>
    </div>
  );
}

export default EmployeeDashboard;
