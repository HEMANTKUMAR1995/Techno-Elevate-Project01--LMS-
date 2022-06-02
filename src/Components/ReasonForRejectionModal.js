import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function ReasonForRejectionModal({show ,setShow}) {
  return (
    <div> <>
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Reason for Rejection</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-2"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Reason</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setShow(false)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </></div>
  )
}

export default ReasonForRejectionModal