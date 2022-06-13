import React from "react";
import { useState } from "react";
import { Button, Container, Form, Modal, Navbar, Table } from "react-bootstrap";
import ReasonForRejectionModal from "../Components/ReasonForRejectionModal";
import AdminRequestTable from "./AdminRequestTable";

function AdminRequest() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <ReasonForRejectionModal show={show} setShow={setShow} />

      <Navbar style={{ height: "60px" }}>
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: "orange" }}>
            Request List
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
        </Container>
      </Navbar>
      <AdminRequestTable show={show} setShow={setShow} />
    </div>
  );
}

export default AdminRequest;
