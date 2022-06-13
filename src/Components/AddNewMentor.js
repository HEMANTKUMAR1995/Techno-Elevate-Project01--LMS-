import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Select from "react-select";

function AddNewMentor({ setShow, show }) {
  const options = [
    { value: "react", label: "react" },
    { value: "Angular", label: "Angular" },
    { value: "Java", label: "java" },
    { value: "SQL", label: "SQL" },
    { value: "C#", label: "C#" },
    { value: "Mongo-DB#", label: "MongoDB#" },
    { value: "PYTHON", label: "PYTHON" },
    { value: "NODE", label: "NODE JS" },
    { value: "HTML & CSS", label: "HTML & CSS" },
  ];
  const [mentorModalData, setMentorModalData] = useState({
    mentorname:"",
    employeeid: "",
    mentoremail: "",
    mentorskills: [],
  });
  const handleInput = (e) => {
    setMentorModalData({ ...mentorModalData, [e.target.name]: e.target.value });
  };
  const [mentorData, setMentorData] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    let mentorDataCopy = [...mentorData];
    mentorDataCopy.push(mentorModalData);
    setMentorData(mentorDataCopy);
    localStorage.setItem("mentorData", JSON.stringify(mentorDataCopy));
    setShow(false);
  }
  return (
    <div>
      <>
        <Modal show={show} onHide={() => setShow(false)}>
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
                <Form.Control
                  type="text"
                  autoFocus
                  name="mentorname"
                  value={mentorData.mentorname}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Employee ID</Form.Label>
                <Form.Control
                  type="text"
                  name="employeeid"
                  value={mentorData.employeeid}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email Id</Form.Label>
                <Form.Control
                  type="text"
                  name="mentoremail"
                  value={mentorData.mentoremail}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Skills</Form.Label>

                <Select
                  isMulti
                  name="mentorskills"
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => {
                    console.log(e);
                    setMentorModalData({ ...mentorModalData, mentorskills: e });
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default AddNewMentor;
