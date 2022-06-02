import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function GiveRatingModal({shows,setShows,addMockData}) {
  return (
    <div>
      <Modal size="lg" show={shows} onHide={() => setShows(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Give Ratings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="someForm">
            <div>
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
            </div>
            {/* <Form.Group> */}
            <div>
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
            </div>
            {/* <Form.Group> */}
            <div>
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
            </div>
            {/* <Form.Group> */}
            <div>
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
            </div>
            {/* <Form.Group> */}
            <div>
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
            </div>
            {/* <Form.Group> */}
            
            <div>
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
            </div>
            <div>
              <Form.Group
                className="textareamb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Reason</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </div>
          </div>
          {/* </Form.Group> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShows(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShows(false)}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default GiveRatingModal