import React from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

function AttendenceModal({show,setShow,datevalue}) {
  return (
    <div>
      <>
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Attendence for {datevalue}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table>
              <thead className="tableheading">
                <tr>
                  <th>No</th>
                  <th>Emoloyee ID </th>
                  <th>Employee Name</th>
                  <th>Attendence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>tyss01HEMANT</td>
                  <td>S Hemant kumar</td>
                  <td>
                    <Form style={{ display: "flex" }}>
                      <Form.Check label="m" type="switch" id="custom-switch" />
                      &nbsp; &nbsp;
                      <Form.Check
                        label="n"
                        type="switch"
                        id="custom-switch"
                        position="inline"
                      />
                    </Form>
                  </td>
                </tr>
              </tbody>
            </Table>
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
      </>
    </div>
  );
}

export default AttendenceModal;
