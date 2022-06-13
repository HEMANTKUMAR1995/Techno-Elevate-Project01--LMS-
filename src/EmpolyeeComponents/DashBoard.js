import React from "react";
import { useState } from "react";
import {
  GenderData,
  UserData,
  experienceData,
  EmployeeDegree,
  AdminMentorbatchPerformance,
} from "../Data/AdminMentorgraphData";
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./EmployeePage.css";
import { Card } from "react-bootstrap";
function DashBoard() {
  const [batch, setbatch] = useState({
    labels: AdminMentorbatchPerformance.map((data) => data.Score),
    datasets: [
      {
        label: "Batch Performance",
        data: AdminMentorbatchPerformance.map((data) => data.num),
        backgroundColor: [
          "#39bb5c",
          "#2db5ee",
          "#e4d402",
          "#ea8604",
          "#e40347",
        ],
        hoverOffset: 80,

      },
    ],
  });
  const [degree, setdegree] = useState({
    labels: EmployeeDegree.map((data) => data.edu),
    datasets: [
      {
        label: "Employee Degree",
        data: EmployeeDegree.map((data) => data.num),
        backgroundColor: [
          "#ff007c"
        ],
        // borderColor: "rgba(255,99,132,1)",
        barPercentage:0.2,
        borderRadius:10
      },
    ],
  });
  const [experience, setexperience] = useState({
    labels: experienceData.map((data) => data.year),
    datasets: [
      {
        label: "Experience",
        data: experienceData.map((data) => data.number),
        backgroundColor: [
        "#25cdec"
        ],
        // borderColor: "rgba(255,99,132,1)",
        // borderWidth: 1,
        barPercentage: 0.8,
        borderRadius: 10,
      },
    ],
  });
  const [yearOfPassing, setyearOfPassing] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Year Of Passing",
        data: UserData.map((data) => data.numofstu),
        backgroundColor: [
        "#25cdec"
        ],
        // borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        barPercentage: 0.8,
        borderRadius: 10,
      },
    ],
  });
  const [genderData, setgenderData] = useState({
    labels: GenderData.map((data) => data.id),
    datasets: [
      {
        label: "Gender",
        data: GenderData.map((data) => data.number),
        backgroundColor: ["#086288", "#ed9232"],
        hoverOffset: 50,
      },
    ],
  });
  return (
    <div style={{ padding: "5px" }}>
      <div className="d-flex" style={{justifyContent:"space-around"}}>
        {/* <Card className="Doughnut-graph"> */}
          <div className="Gender" style={{width:"20%"}}>
            <b> Gender</b>
            <Doughnut data={genderData} />
          </div>
        {/* </Card> */}
        {/* <Card className="Bar-graph1"> */}
          <div className="yearOfPassing" style={{width:"30%"}}>
            <b> Year Of Passing</b>
            <Bar
              data={yearOfPassing}
              options={{
                scales: {
                  x: {
                    display: false,
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                  },
                },
                indexAxis: "y",
              }}
            />
          </div>
        {/* </Card> */}
        {/* <Card className="Bar-graph2"> */}
          <div className="Experiecnce" style={{width:"30%"}}>
            <b>Experience</b>
            <Bar
              data={experience}
              options={{
                scales: {
                  x: {
                    display: false,
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                  },
                },
                indexAxis: "y",
              }}
            />
          </div>
        {/* </Card> */}
      </div>
      <div className="d-flex" style={{ justifyContent:"space-evenly",marginTop:"2px" }}>
        {/* <Card className="Bar-graph3"> */}
          <div className="EmployeeDegree" style={{width:"40%"}}>
            <b>Employee Degree</b>
            <Bar data={degree}  options={{
                scales: {
                  x: {
                    display: true,
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    display:false,
                    grid: {
                      display: false,
                    },
                  },
                },
              }} />
          </div>
          <div className="AdminMentorbatchPerformance" style={{width:"20%", zIndex:100}}>
            <b>Batch Performance</b>
            <Pie data={batch} />
          </div>
      </div>
    </div>
  );
}

export default DashBoard;
