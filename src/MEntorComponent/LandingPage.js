import { Avatar } from "antd";
import InputComponent from "../EmpolyeeComponents/InputComponent";
import React, { useState } from "react";
import "./LandingPage.css";
import {
  Breadcrumb,
  Button,
  Container,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import TableRusableComponent from "./TableRusableComponent";
import TableRusableComponent2 from "./TableRusableComponent2";

function LandingPage() {
  // const [firstLineData, setFirstLineData] = useState([
  //   { "Address Type :--": <b>{}</b> },
  //   { "Door No. :--": <b>{}</b> },
  //   { "Street :--": <b>{}</b> },
  //   { "Locality :--": <b>{}</b> },
  // ]);
  // const [secondData, setSecondData] = useState([
  //   { "city :--": <b>{}</b> },
  //   { "State. :--": <b>{}</b> },
  //   { "PIN Code --": <b>{}</b> },
  //   { "Land Mark :--": <b>{}</b> },
  // ]);
  let user = localStorage.getItem("PrimaryData");
  let userSecondary = localStorage.getItem("SecondaryData");
  let userEducation = localStorage.getItem("EducationDetails");
  let userAddress = localStorage.getItem("AddressDetails");
  let userBank = localStorage.getItem("Bank Details");
  let userTechnical = localStorage.getItem("Technical Details");
  let userExperience = localStorage.getItem("ExperienceData");
  let userContact = localStorage.getItem("ContactData");

  const dataparsed = JSON.parse(user);
  const dataparsedSecondary = JSON.parse(userSecondary);
  const dataparsedEducation = JSON.parse(userEducation);
  const dataparsedAddress = JSON.parse(userAddress);
  const dataparsedBank = JSON.parse(userBank);
  const dataparsedTechnicalDetails = JSON.parse(userTechnical);
  console.log(dataparsed);
  // console.log(dataparsed.EmpolyeeName);
  let navigate = useNavigate();

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
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
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

            <br />
            <img
              width="35px"
              height="35px"
              alt=""
              style={{ marginLeft: "8px" }}
              src={require("./../Assests/dashboard1.png")}
              onClick={() => navigate("/Mentor/DashBoard")}
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
          <div
            className="col-lg-12 col-sm-12 col-xs-12 renderComponents "
            style={{ overflow: "scroll" }}
          >
            {/* <table className="EmployeeMappedData"> */}
            <TableRusableComponent
              h1={"Employee Id"}
              h2={"Empolyee Name"}
              h3={"Date Of joining"}
              h4={"Date Of Birth"}
              h5={"Salary"}
              h6={"Blood Group"}
              h7={"Designation"}
              h8={"Gender"}
              Heading={"Primary Data"}
              empid={dataparsed.EmpolyeeId}
              empname={dataparsed.EmpolyeeName}
              doj={dataparsed.DateOfJoining}
              dob={dataparsed.DateOfBirth}
              sal={dataparsed.Salary}
              blood={dataparsed.BloodGroup}
              role={dataparsed.Designation}
              sex={dataparsed.Gender}
            />
            <hr />
            <TableRusableComponent
              h1={"PAN No."}
              h2={"Aadhar No."}
              h3={"Father name"}
              h4={"Mother name"}
              h5={"Spouse name"}
              h6={"Passport No."}
              h7={"marital status"}
              Heading={"Secondary Info"}
              empid={dataparsedSecondary.PanNo}
              empname={dataparsedSecondary.Aadharno}
              doj={dataparsedSecondary.FathersName}
              dob={dataparsedSecondary.MotherName}
              sal={dataparsedSecondary.SpouseName}
              blood={dataparsedSecondary.PassportNo}
              role={dataparsedSecondary.MaritalStatus}
            />
            <hr />
            <TableRusableComponent
              h1={"Education Type"}
              h2={"Year of Passing"}
              h3={"Percentage(%)"}
              h4={"University Name"}
              h5={"Institute name"}
              h6={"Specialization"}
              h7={"State"}
              Heading={"Education Info"}
              empid={dataparsedEducation.EducationType}
              empname={dataparsedEducation.YearOfpassing}
              doj={dataparsedEducation.PerCenTage}
              dob={dataparsedEducation.UnivercityName}
              sal={dataparsedEducation.InstituteName}
              blood={dataparsedEducation.Specilization}
              role={dataparsedEducation.State}
            />
            <hr />
            <TableRusableComponent
              h1={"Address Type"}
              h2={"Door No"}
              h3={"Street"}
              h4={"Locality"}
              h5={"city"}
              h6={"State"}
              h7={"PIN Code"}
              h8={"Land Mark"}
              Heading={"Address Info"}
              empid={dataparsedAddress.AddressType}
              empname={dataparsedAddress.DoorNumber}
              doj={dataparsedAddress.Street}
              dob={dataparsedAddress.Locality}
              sal={dataparsedAddress.City}
              blood={dataparsedAddress.State}
              role={dataparsedAddress.pinCode}
              sex={dataparsedAddress.LandMark}
            />
            <hr />
            <TableRusableComponent
              h1={"Account Number"}
              h2={"Account Type"}
              h3={"Bank Name"}
              h4={"Branch"}
              h5={"Ifsc Code"}
              h6={"State"}
              Heading={"Address Info"}
              empid={dataparsedBank.AccountNumber}
              empname={dataparsedBank.AccountType}
              doj={dataparsedBank.BankName}
              dob={dataparsedBank.Branch}
              sal={dataparsedBank.IfscCode}
              blood={dataparsedBank.State}
            />
            <hr/>
            <TableRusableComponent
              h1={"Skill Ratings"}
              h2={"Skill Type"}
              h3={"YEar Of Experience"}
              Heading={"Technical Skills"}
              empid={dataparsedTechnicalDetails.SkillRatings}
              empname={dataparsedTechnicalDetails.SkillType}
              doj={JSON.stringify(dataparsedBank.YEarOfExperience)}

            />

            {/* <TableRusableComponent2 TableHeading={"Address Details"} firstLineData={firstLineData} secondData={secondData}/> */}
          </div>
        </div>
      </Row>
    </div>
  );
}
export default LandingPage;
