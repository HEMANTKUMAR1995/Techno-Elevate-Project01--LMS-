import zIndex from '@mui/material/styles/zIndex';
import React from 'react'
import { Breadcrumb, Button, Container, Navbar, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import AdminMentor from '../AdminComponents/AdminMentor';
import AdminRequest from '../AdminComponents/AdminRequest';
import AdminTable from '../AdminComponents/AdminTable';


function LandingPage() {
  return (
    <div>
     <Navbar className="navBar" >
        <Container fluid>
          <Navbar.Brand className="justify-content-start" >
            <img
              src={require("./../Assests/logob.png")}
              style={{ width: "150px" }}
              alt="Techno Elevate"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text className="justify-content-center">
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                style={{ width: "500px" 
                }}
              />
            </div>
          </Navbar.Text>
          <Navbar.Text className="jsutify-content-end">
            <Button variant="outline-primary" style={{ padding: "5px 25px" }}>
              Logout
            </Button>
          </Navbar.Text>
        </Container>
      </Navbar>
<row>
    <div  className="col-lg-1 col-sm-1 col-md-1"
          style={{
            width: "80px",
            height: "95vh",
            boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
          }}
        >
        <br/>
        {/* <Link to =''> */}
         <Button
              variant="dark"
              className="BatchIcon"
            >
              <img
                style={{ width: "25px" }}
                src={require("./../Assests/Batch.png")}
                alt=""
              />
            </Button>
            {/* </Link> */}
            <br /> <hr style={{ width: "68px" }} />
          {/* <Link to=" "> */}
            <Button
              variant="dark"
              className="MentorIcon"
              // style={{ backgroundColor: "none" }}
            >
              <img
                style={{ width: "25px" }}
                src={require("./../Assests/team (3).png")}
                alt=""
              />
            </Button>
          {/* </Link> */}
          <hr style={{ width: "68px" }} />


    </div>
</row>
       </div>
       )}
export default LandingPage