import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { useNavigate } from "react-router";

function Login() {
  const [EmployeeData, seEmployeeData] = useState({
    employeeId: "",
    password: "",
  });

  let Adminid = "DEEPTITYSS001";
  let Adminpassword = "DEEPTI";
  let Mentorid = "SATYAMTYSS01";
  let Mentorpassword = "SATYAMTYSS01";
  let Employeeid = "HEMANT01";
  let EmployeePassword = "HEMANT";

  let UpdateEmployeeData = (event) => {
    seEmployeeData({
      ...EmployeeData,
      [event.target.name]: event.target.value,
    });
  };
  let navigate = useNavigate();

  let Register = () => {
    navigate("/Primary");
  };

  let ValidateData = () => {
    if (!EmployeeData.employeeId && !EmployeeData.password) {
      alert("Please Fill all the Feilds.....!");
    } else if (EmployeeData.employeeId && !EmployeeData.password) {
      alert("Please the fill the Password Feild");
    } else if (!EmployeeData.employeeId && EmployeeData.password) {
      alert("Please the fill the Empoloyee-Id Feild");
    } else if (
      EmployeeData.employeeId === Adminid &&
      EmployeeData.password === Adminpassword
    ) {
      navigate("/Admin");
      // console.log("Validated");
    } else if (
      EmployeeData.employeeId === Mentorid &&
      EmployeeData.password === Mentorpassword
    ) {
      navigate("/EmployeeMainPage");
    } else if (
      EmployeeData.employeeId === Employeeid &&
      EmployeeData.password === EmployeePassword
    ) {
      navigate("/EmployeePage");
    } else {
      alert("you are not registerd please Register");
      navigate("/Primary");
    }
  };

  return (
    <div className="backgroundimage">
      <div
        className="containe"
        // style={{ border: "2px solid green" }}
      >
        <Card
          className="row "
          style={{
            width: "80vw",
            height: "80vh",
            display: "flex",
            flexDirection: "row",
            margin: "auto",
            marginTop: "7%",
            backgroundColor: "#000000A2",
          }}
        >
         
          <Card.Img
            style={{ width: "60%", height: "100%", marginLeft: "-11px" }}
            //  className="col-xl-4 col-lg-4 col-md-8 col-sm-8"
            className=" d-none  d-md-block"
            variant="top"
            src={require("./../Assests/loginimg.png")}
          />

          <Card.Body className="col-xl-4 col-lg-4 col-md-4 col-sm-8">
            <Card.Img
              src={require("./../Assests/logoimg.png")}
              style={{
                width: "244px",
                height: "91px",
                display: "flex",
                position: "relative",
                justifyContent: "center",
              }}
            />
            <Card.Title
              className="mb-4"
              style={{
                color: "#FFAA17",
                fontSize: "37px",
                fontFamily: "Abril Fatface",
                display: "flex",
                marginLeft: "40%",
              }}
            >
              Login
            </Card.Title>

            <Card.Text>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  style={{
                    textAlign: "start",
                    color: "white",
                    fontSize: "12px",
                    fontFamily: "Agrandir Variable",
                    width: "73%",
                    margin: "auto",
                  }}
                >
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="employeeId"
                    value={EmployeeData.employeeId}
                    onChange={UpdateEmployeeData}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                  style={{
                    textAlign: "start",
                    color: "white",
                    fontSize: "12px",
                    fontFamily: "Agrandir Variable",
                    width: "73%",
                    margin: "auto",
                  }}
                >
                  <Form.Label style={{ color: "white" }}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    // placeholder="password"
                    value={EmployeeData.password}
                    onChange={UpdateEmployeeData}
                  />
                </Form.Group>
              </Form>
              <div className="Button-Group">
                <Button
                  variant="warning"
                  type="submit"
                  style={{ width: "36%" }}
                  onClick={ValidateData}
                >
                  LOGIN
                </Button>
                <Button
                  variant="secondary"
                  type="cancel"
                  style={{ width: "36%" }}
                >
                  CANCEL
                </Button>
              </div>
            </Card.Text>
            <div className="mt-5" style={{ width: "100%", margin: "auto" }}>
              <p className="paraText">
                Already have an account?
                <a className="anchorTag" onClick={Register}>
                  Register.
                </a>
              </p>
              <br />
              <div style={{ display: "-ms-grid" }}>
                <p style={{ marginTop: "1%", marginBottom: "-2%" }}>
                  <a className="changePass" href="#">
                    Change Password
                  </a>
                </p>
                <hr className="hr" />
                <p className="copyRights">
                  Copyright &#169; Aleercio.com &nbsp; &nbsp; &nbsp; Terms &
                  Conditions | Privacy Policy
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
