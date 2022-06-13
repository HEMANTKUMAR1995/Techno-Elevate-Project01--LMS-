import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Navbar, Table } from "react-bootstrap";
import Chip from "@mui/material/Chip";
import AddNewBatchModal from "../Components/AddNewBatchModal";
import ChangeStatusModal from "../Components/ChangeStatusModal";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import EditBatchModal from "../Components/EditBatchModal";

function AdminTable() {
  const [show, setShow] = useState(false); /* for Add new mentor modal */
  const [status, setStatus] = useState(false); /*for change status modal */
  const [batchModalData, setBatchModalData] = useState({
    BatchName: "",
    Mentorname: "",
    Technologies: "",
    StartDate: new Date().toLocaleDateString(),
    EndDate: new Date().toLocaleDateString(),
  });
  const [editBatch, setEditBatch] = useState(false); /*for edit batch modal */
  const [rowNo, setrowNo] = useState(); /*for edit batch modal */

  let handleCloseEdit = () => {
    /*for closing edit batch modal */
    setEditBatch(false);
  };
  const [data, setdata] = useState([]); /*for storing data from local storage */

  let functionOnEditClick = (i) => {
    /*for opening edit batch modal */ /*for opening change status modal */
    setEditBatch(true);
    setBatchModalData({ ...data[i] });
    setrowNo(i);
  };

  let saveEditData = () => {
    let editDataCopy = [...data];
    editDataCopy.splice(rowNo, 1, batchModalData);
    setdata(editDataCopy);
    localStorage.setItem("batchData", JSON.stringify(editDataCopy));
    handleCloseEdit();
  };
  const initialBatchData = [
    {
      BatchName: "Uplift2022march",
      Mentorname: "Sachin",
      Technologies: "Java,Spring,Hibernate",
      StartDate: "20/03/2020",
      EndDate: "20/03/2020",
    },
  ];
  useEffect(() => {
    if (localStorage.getItem("batchData")) {
      setdata(JSON.parse(localStorage.getItem("batchData")));
    } else {
      setdata(initialBatchData);
    }
  }, []);

  let functionOnDeleteClick = () => {
    alert("You Clicked On Delete Icon");
  };
  let HandelChangeInModal = (e) => {
    setBatchModalData({ ...batchModalData, [e.target.name]: e.target.value });
  };
  let setBatchDataToLS = () => {
    let dataCopy = [...data];
    dataCopy.push(batchModalData);
    setdata(dataCopy);
    localStorage.setItem("batchData", JSON.stringify(dataCopy));
    setShow(false);
  };

  // console.log(a);
  let dataFromLocalStorage = [];
  dataFromLocalStorage = JSON.parse(localStorage.getItem("batchData"));
  return (
    <div>
      <ChangeStatusModal status={status} setStatus={setStatus} />
      <EditBatchModal
        editBatch={editBatch}
        batchModalData={batchModalData}
        setBatchModalData={setBatchModalData}
        HandelChangeInModal={HandelChangeInModal}
        handleCloseEdit={handleCloseEdit}
        saveEditData={saveEditData}
        functionOnEditClick={functionOnEditClick}
      />
      <AddNewBatchModal
        show={show}
        setShow={setShow}
        batchModalData={batchModalData}
        HandelChangeInModal={HandelChangeInModal}
        setBatchDataToLS={setBatchDataToLS}
        setBatchModalData={setBatchModalData}
      />
      <div>
        <Navbar style={{ height: "60px" }}>
          <Container fluid>
            <Navbar.Brand href="#home" style={{ color: "orange" }}>
              Batch List
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
                    type="search"
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
              style={{ padding: "5px 10px", color: "#f4f5f8" }}
            >
              <i className="fa-solid fa-plus"></i> &nbsp;+ New Batch
            </Button>
          </Container>
        </Navbar>
        <Table className="table-heading">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>No</th>
              <th>Batch Id</th>
              <th>Batch Name</th>
              <th>Mentor Name</th>
              <th>Technologies</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataFromLocalStorage.map((val, idx) => {
              return (
                <>
                  <tr key={idx} style={{ background: "#ffffff" }}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{idx + 1}</td>
                    <td>{"TyssApril" + idx + "22"}</td>
                    <td>{val.BatchName}</td>
                    <td>{val.Mentorname}</td>
                    {/* <td>{val.Technologies}</td> */}
                    <td>
                      {val.Technologies.map((val, idx) => {
                        return (
                          <Chip
                            key={idx}
                            label={val.label}
                            style={{ backgroundColor: "#0c99d4" }}
                            className="ChipDesign"
                          />
                        );
                      })}
                    </td>
                    <td>{val.StartDate}</td>
                    <td>{val.EndDate}</td>
                    <td>
                      <select
                        name="status"
                        id="cars"
                        onChange={() => setStatus(true)}
                        style={{ border: "0px", fontSize: "20px" }}
                      >
                        <option value="inProgress" style={{ color: "#e5cb41" }}>
                          InProgress
                        </option>
                        <option value="pending" style={{ color: "#dff7e5" }}>
                          Pending
                        </option>
                        <option value="completed" style={{ color: "#bde0f8" }}>
                          Completed
                        </option>
                      </select>
                    </td>
                    <td>
                      <button
                        style={{ border: "none" }}
                        onClick={() => {
                          functionOnEditClick(idx);
                        }}
                      >
                        <BsFillPencilFill />
                      </button>
                      &nbsp;
                      <button
                        style={{ border: "none" }}
                        onClick={functionOnDeleteClick}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AdminTable;
