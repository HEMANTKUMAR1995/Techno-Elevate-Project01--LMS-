import React from "react";
import "./../AdminComponents/AdminBatch.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SideNavbar({ setPage }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="col-lg-1 col-sm-1 col-md-1"
        style={{
          width: "80px",
          height: "95vh",
          boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
        }}
      >
        <br />
        <Button
          onClick={() => setPage("home")}
          variant="light"
          className="BatchIcon"
        >
          <img
            style={{ width: "25px" }}
            src={require("./../Assests/Batch.png")}
            alt=""
          />
        </Button>
        <br /> <hr style={{ width: "68px" }} />
        <Button
          onClick={() => setPage("adminmentor")}
          variant="light"
          className="MentorIcon"
        >
          <img
            style={{ width: "25px" }}
            src={require("./../Assests/Mentor.png")}
            alt=""
          />
        </Button>
        <br />
        <hr style={{ width: "68px" }} />
        <Button
          onClick={() => setPage("adminrequest")}
          variant="light"
          className="RequestIcon"
        >
          <img
            style={{ width: "25px" }}
            src={require("./../Assests/Request.png")}
            alt=""
          />
        </Button>
      </div>
    </div>
  );
}

export default SideNavbar;
