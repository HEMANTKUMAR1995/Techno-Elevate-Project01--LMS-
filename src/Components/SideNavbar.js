import React from "react";
import "./../AdminComponents/AdminBatch.css";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
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
        {/* <Link to="Admin/batch"> */}
        <Button
          onClick={() => setPage("home")}
          variant="light"
          className="BatchIcon"
          // style={{ border:"blue" }}
        >
          <img
            style={{ width: "25px" }}
            src={require("./../Assests/Batch.png")}
            alt=""
          />
        </Button>
        {/* </Link> */}
        <br /> <hr style={{ width: "68px" }} />
        {/* <Link to="/Admin/Mentor"> */}
        <Button
          onClick={() => setPage("adminmentor")}
          variant="light"
          className="MentorIcon"
          // style={{ backgroundColor: "none" }}
        >
          <img
            style={{ width: "25px" }}
            src={require("./../Assests/Mentor.png")}
            alt=""
          />
        </Button>
        {/* </Link> */}
        <br />
        <hr style={{ width: "68px" }} />
        {/* <Link to="/Admin/Request"> */}
        <Button
          onClick={() => setPage("adminrequest")}
          variant="light"
          className="RequestIcon"
          // style={{ backgroundColor: "none" }}
        >
          <img
            style={{ width: "25px" }}
            src={require("./../Assests/Request.png")}
            alt=""
          />
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default SideNavbar;
