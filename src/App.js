import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Primary from "./Signup Page/Primary";
import { Route, Routes } from "react-router";
import SecondaryInfo from "./Signup Page/SecondaryInfo";
import EducationDetails from "./Signup Page/EducationDetails";
import AddressDetails from "./Signup Page/AddressDetails";
import BankDetails from "./Signup Page/BankDetails";
import TechnicalSkills from "./Signup Page/TechnicalSkills";
import Experience from "./Signup Page/Experience";
import Contact from "./Signup Page/Contact";
import AdminBatch from "./AdminComponents/AdminBatch";
import EmployeeMainPage from "./EmpolyeeComponents/EmployeeMainPage";
import Login from "./LoginComponent/Login";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Admin" element={<AdminBatch />} />
        <Route path="/Primary" element={<Primary />} />
        <Route path="/SecondaryInfo" element={<SecondaryInfo />} />
        <Route path="/EducationDetails" element={<EducationDetails />} />
        <Route path="/AddressDetails" element={<AddressDetails />} />
        <Route path="/BankDetails" element={<BankDetails />} />
        <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/EmployeeMainPage" element={<EmployeeMainPage />} />
      </Routes>
    </div>

  );
}

export default App;
