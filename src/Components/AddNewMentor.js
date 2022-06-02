import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function AddNewMentor({setShow,show}) {

  return (
    <div>
      <>
        <Modal show={show} onHide={()=>setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Mentor </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mentor Name</Form.Label>
                <Form.Control type="text" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Employee ID</Form.Label>
                <Form.Control type="text" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email Id</Form.Label>
                <Form.Control type="text" autoFocus />
              </Form.Group>
              <Form.Group>
                <Form.Label>Skills</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="AccountType"
                >
                  <option>.....</option>
                  <option value="1">SQL</option>
                  <option value="2">React</option>
                  <option value="3">java Script</option>
                  <option value="3">HTML/CSS</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>setShow(false)}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default AddNewMentor;
