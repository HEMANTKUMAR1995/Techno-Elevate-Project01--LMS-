import React, { useState } from "react";
import "./AdminBatch.css";
import { Breadcrumb, Button, Container, Navbar, Row } from "react-bootstrap";
// import { Layout } from 'antd'
import AdminTable from "./AdminTable";
import { Link, Route, Routes } from "react-router-dom";
import AdminMentor from "./AdminMentor";
import AdminRequest from "./AdminRequest";
import { useNavigate } from "react-router-dom";
import TopNavbar from "../Components/TopNavbar";
import SideNavbar from "../Components/SideNavbar";

function AdminBatch() {
  const [page, setPage] = useState("home");
  const navigate = useNavigate();
  return (
    <div>
      <TopNavbar />

      <div className="admin-batch-window">
        <SideNavbar setPage={setPage} />
        <div className="admin-batch-window-content">
          <Breadcrumb className="admin-batch-window-content-breadcrumb">
            <Breadcrumb.Item onClick={() => navigate("/AdminBatch")}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => navigate("/Admin/Mentor")}>
              Mentor
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => navigate("/Admin/Request")}>
              Employee
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="admin-batch-window-content-main">
            {page === "home" && <AdminTable />}
            {page === "adminmentor" && <AdminMentor />}
            {page === "adminrequest" && <AdminRequest />}
            {/* <Routes>
              <Route path="/Admin/batch" element={<AdminTable />} />
              <Route path="/Mentor" element={<AdminMentor />} />
              <Route path="/Request" element={<AdminRequest />} />
            </Routes> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBatch;
