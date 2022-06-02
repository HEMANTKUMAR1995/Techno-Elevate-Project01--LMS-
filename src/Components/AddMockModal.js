import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function AddMockModal({show,setShow,addMockData}) {
  return (
    <div><>
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Mock </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-2"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Batch ID</Form.Label>
            <Form.Control
              type="text"
              name="batchId"
              value={addMockData.batchId}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-2"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Mock No. </Form.Label>
            <Form.Control
              type="text"
              name="mockNo"
              value={addMockData.mockNo}
            />
            <Form.Group>
              <Form.Label>Technology</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="technology"
                value={addMockData.technology}
              >
                <option>.....</option>
                <option value="1">SQL</option>
                <option value="2">React</option>
                <option value="3">java Script</option>
                <option value="3">HTML/CSS</option>
              </Form.Select>
            </Form.Group>
          </Form.Group>
          <Form.Group
            className="mb-2"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>panel</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="panel"
              value={addMockData.panel}
            >
              <option></option>
              <option value="1">Satyam</option>
              <option value="2">Megah</option>
              <option value="3">Shantala</option>
              <option value="3">Tanmay</option>
            </Form.Select>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>dateAndTime</Form.Label>
              <Form.Control
                type="date"
                name="dateAndTime"
                value={addMockData.dateAndTime}
                autoFocus
              />
            </Form.Group>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setShow(false)}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  </></div>
  )
}

export default AddMockModal