import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Navbar,
  Table,
} from "react-bootstrap";
import AddNewMentor from "../Components/AddNewMentor";
import AdminMentorTable from "./AdminMentorTable";

function AdminMentor() {
  const [chips, setChips] = useState(["react", "java", "python", "SQl"]);
  const [show, setShow] = useState(false);

  return (
    <div>
      <AddNewMentor show={show} setShow={setShow} />
      <Navbar style={{ height: "60px" }}>
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: "orange" }}>
            Mentor List
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div
                className="form-group has-search"
                style={{ marginRight: "20px" }}
              >
                <span className="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  style={{ width: "400px" }}
                />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
          <Button
            onClick={() => setShow(true)}
            variant="warning"
            style={{ padding: "5px 10px", color: "white" }}
          >
            <i className="fa-solid fa-plus"></i> &nbsp; New Mentor
          </Button>
        </Container>
      </Navbar>
      <AdminMentorTable chips={chips} setChips={setChips} />
    </div>
  );
}

export default AdminMentor;
