import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Select from "react-select";

function EditBatchModal({
  editBatch,
  setEditBatch,
  batchModalData,
  HandelChangeInModal,
  setBatchModalData,
  editBacthData,
  handleCloseEdit,
  saveEditData
}) {
  const options = [
    { value: "react", label: "react" },
    { value: "Angular", label: "Angular" },
    { value: "Java", label: "java" },
    { value: "SQL", label: "SQL" },
    { value: "C#", label: "C#" },
    { value: "Mongo-DB", label: "MongoDB" },
    { value: "PYTHON", label: "PYTHON" },
    { value: "NODE", label: "NODE JS" },
    { value: "HTML & CSS", label: "HTML & CSS" },
  ];
  return (
    <div>
      <>
        <Modal show={editBatch} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Batch </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Batch Name</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  name="BatchName"
                  value={batchModalData.BatchName}
                  onChange={HandelChangeInModal}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mentor Name</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="Mentorname"
                  value={batchModalData.Mentorname}
                  onChange={HandelChangeInModal}
                >
                  <option>.....</option>
                  <option value="Satyam SAURAV">SATYAM SAURAV</option>
                  <option value="SHANALA">SHANTALA</option>
                  <option value="AJAY">AJAY</option>
                  <option value="MEGHA">MEGHA</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Technologies</Form.Label>

                <Select
                  isMulti
                  name="Technologies"
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => {
                    console.log(e);
                    setBatchModalData({ ...batchModalData, Technologies: e });
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="Date"
                  autoFocus
                  name="StartDate"
                  value={batchModalData.StartDate}
                  onChange={HandelChangeInModal}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="Date"
                  autoFocus
                  name="EndDate"
                  value={batchModalData.EndDate}
                  onChange={HandelChangeInModal}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="primary" onClick={saveEditData}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default EditBatchModal;
