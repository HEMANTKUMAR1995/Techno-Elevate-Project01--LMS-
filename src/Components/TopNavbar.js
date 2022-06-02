import React from "react";
import "./../AdminComponents/AdminBatch.css";
import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

function TopNavbar() {
  let navigate = useNavigate();
  let LogoutFunction = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar className="navBar">
        <Container fluid>
          <Navbar.Brand className="justify-content-start">
            <img
              src={require("./../Assests/logob.png")}
              style={{ width: "200px" }}
              alt="Techno Elevate"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text className="justify-content-center">
            <div className="form-group has-search">
              {/* <span className="fa fa-search form-control-feedback"></span> */}
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                style={{ width: "40vw" }}
              />
            </div>
          </Navbar.Text>
          <Navbar.Text className="jsutify-content-end">
            <Button
              variant="outline-primary"
              style={{ padding: "5px 25px" }}
              onClick={LogoutFunction}
              
            >
              Logout
            </Button>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavbar;
