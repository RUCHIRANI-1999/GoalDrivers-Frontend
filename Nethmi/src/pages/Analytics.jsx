import React from "react";
import {
  FaRegBell,
  FaRegEnvelope,
  FaMedal,
} from "react-icons/fa";
import Sidebar from "../components/Sidebar";

//import "./analytics.css";
const analytics = () => {
  return (<div style={{display:'flex'}}>
  <div style={{width:'10%'}}><Sidebar/></div>
  <div style={{width:'90%'}}>
    <div class="about-body">
      <nav class="navbar navbar-light bg-info mb-5">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Admin Dashboard</span>
          <div class="my-2 my-lg-0">
            <a href="">
              <span class="navbar-brand mb-4 nav-icons ">
                <FaRegEnvelope />
              </span>
            </a>
            <a href="">
              <span class="navbar-brand mb-4 nav-icons ">
                <FaRegBell />
              </span>
            </a>
          </div>
        </div>
      </nav>
     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "400px",
            backgroundColor: " #e6f7ff",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
            margin:"0",
          }}
        >
          <h5 style={{ color: " #002133", textAlign: "center", margin:"20px" }}>Medal Orders</h5>
          
          
          <h5 style={{ color: " #002133", textAlign: "left" }}>
            {" "}
            <span class="navbar-brand mb-0 nav-icons">
              <FaMedal />
              <tb/>
            </span>
            Platinum Orders
          </h5>
          <h5 style={{ color: "black", textAlign: "center" }}>12</h5>
          <h5 style={{ color: " #002133", textAlign: "left" }}>
            {" "}
            <span class="navbar-brand mb-0 nav-icons">
              <FaMedal />
              <tb/>
            </span>
            Gold Orders
          </h5>
          <h5 style={{ color: "black", textAlign: "center" }}>12</h5>
          <h5 style={{ color: " #002133", textAlign: "left" }}>
            {" "}
            <span class="navbar-brand mb-0 nav-icons">
              <FaMedal />
              <tb/>
            </span>
            Silver Orders
          </h5>
          <h5 style={{ color: "black", textAlign: "center" }}>12</h5>
        </div>
        <div style={{
            
            width: "50vw",
            height: "auto",
            backgroundColor: "#e6f7ff",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
            margin: "auto",
            marginTop: "0",
          }}
        >
          <h5 style={{ color: " #002133", textAlign: "center", margin:"20px" }}>Direct Orders</h5>
          <h5 style={{ color: "black", textAlign: "center", fontWeight:"500" }}>108</h5>
        </div>
      </div>
      {/* <div
          style={{
            width: "50vw",
            height: "auto",
            backgroundColor: "#e6f7ff",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
            margin: "auto",
            margleinTop: "0",
          }}
        >
          <h5 style={{ color: " #002133", textAlign: "center", margin:"20px" }}>Total Orders</h5>
          <h5 style={{ color: "black", textAlign: "center", fontWeight:"500" }}>108</h5>
        </div> */}
    </div>
    </div>
    </div>
  );
};

export default analytics;
