import React from "react";
import { Breadcrumb, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import InputComponent from "./InputComponent";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "antd/dist/antd.css";
import { Link, Routes, Route } from "react-router-dom";
import "./EmployeePage.css";
import { useState } from "react";
import EmployeeBatch from "./EmployeeBatch";
import EmployeeBatch2 from "./EmployeeBatch2";
import DashBoard from "./DashBoard";
import { useNavigate } from "react-router";

function EmployeeMainPage() {
  const [page, setPage] = useState("batch");

  return (
    <div>
      <Navbar className="navBar">
        <Container fluid>
          <Navbar.Brand
            href="/Mentor/DashBoard"
            className="justify-content-start"
          >
            <img
              src={require("./../Assests/logob.png")}
              style={{ width: "150px", border: "none" }}
              alt="Techno Elevate"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text
            className="justify-content-center"
            style={{ width: "500px", border: "none" }}
          >
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <InputComponent
                placeholder="Search"
                style={{ width: "100%", border: "none" }}
                type="text"
                className="form-control"
              />
            </div>
          </Navbar.Text>
          <Navbar.Text className="justify-content-end  d-flex">
            <Avatar
              src="https://cdn.pixabay.com/photo/2022/05/22/12/08/baby-7213274__340.jpg"
              className="avatar"
              size="medium"
              icon={<UserOutlined />}
            />
            <NavDropdown
              className="navDropdown"
              id="nav-dropdown-dark-example"
              title="Chotu"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">Pr
              ofile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Change Password
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Row>
        <div className="col-lg-1 col-sm-1 col-xs-1  MainDiv">
          <div className="sideBar">
            <br />
            <img
              width="35px"
              height="35px"
              alt=""
              style={{ marginLeft: "8px" }}
              src={require("./../Assests/dashboard1.png")}
              onClick={() => setPage("batch")}
            />
            <br /> <hr style={{ width: "80px" }} />
            <img
              width="35px"
              height="35px"
              alt=""
              style={{ marginLeft: "8px" }}
              src={require("./../Assests/Batch.png")}
              onClick={() => setPage("EmployeeList")}
            />
          </div>
        </div>
        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11 breadCrumbs ">
          <Breadcrumb style={{ fontsize: "5px" }}>
            <Breadcrumb.Item href="/Mentor/DashBoard" active>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/Mentor/Dashboard">
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/Mentor/Batch">Batch</Breadcrumb.Item>
          </Breadcrumb>
          <div className="col-lg-12 col-sm-12 col-xs-12 renderComponents ">
            {page === "batch" && <DashBoard />}
            {page === "EmployeeList" && <EmployeeBatch setPage={setPage} />}
            {page === "EmployeeList2" && <EmployeeBatch2 />}
          </div>
        </div>
      </Row>
    </div>
  );
}

export default EmployeeMainPage;


