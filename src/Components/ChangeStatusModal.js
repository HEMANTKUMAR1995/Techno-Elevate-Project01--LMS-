import React from "react";
import { Button, Form, Modal } from 'react-bootstrap'


function ChangeStatusModal({ status, setStatus }) {
  return (
    <div>
      {" "}
      <>
        <Modal
          show={status}
          onHide={() => {
            setStatus(false);
            alert("Sucessfully Updated");
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Change Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Batch Name</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  // name="Mentorname"
                  // value={batchModalData.Mentorname}
                  // onChange={HandelChangeInModal}
                >
                  <option>.....</option>
                  <option value="java">Java</option>
                  <option value="React">React</option>
                  <option value="C#">C#</option>
                  <option value="More">........</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Batch ID</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  // name="Mentorname"
                  // value={batchModalData.Mentorname}
                  // onChange={HandelChangeInModal}
                >
                  <option>.....</option>
                  <option value="01">TYSS01</option>
                  <option value="02">TYSS02</option>
                  <option value="03">TYSS03</option>
                  <option value="04">........</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setStatus(false);
                alert("Sucessfully Updated");
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setStatus(false);
                alert("Sucessfully Updated");
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default ChangeStatusModal;
