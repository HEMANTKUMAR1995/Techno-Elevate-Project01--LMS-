import React, { useState } from "react";
import "./AdminBatch.css";
import { Breadcrumb, Button, Container, Navbar, Row } from "react-bootstrap";
import AdminTable from "./AdminTable";
import AdminMentor from "./AdminMentor";
import AdminRequest from "./AdminRequest";
import TopNavbar from "../Components/TopNavbar";
import SideNavbar from "../Components/SideNavbar";

function AdminBatch() {
  const [page, setPage] = useState("home");
  return (
    <div>
      {/* ------------------------------------Top Navbar------------------------------------ */}
      <TopNavbar />
      {/* ------------------------------------Side Navbar------------------------------------ */}
      <div className="admin-batch-window">
        <SideNavbar setPage={setPage} />
        <div className="admin-batch-window-content">
          {/* ------------------------------------BreadCrumbs ------------------------------------ */}
          <Breadcrumb className="admin-batch-window-content-breadcrumb">
            <Breadcrumb.Item onClick={() => setPage("home")}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => setPage("adminmentor")}>
              Mentor
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => setPage("adminrequest")}>
              Employee
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* ------------------------------------Navigation------------------------------------ */}
          <div className="admin-batch-window-content-main">
            {page === "home" && <AdminTable />}
            {page === "adminmentor" && <AdminMentor />}
            {page === "adminrequest" && <AdminRequest />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBatch;
