import React from "react";
import "./pages.css";

export default function Branches() {
  const branches = [
    { city: "Mumbai", address: "Andheri East, Mumbai, Maharashtra" },
    { city: "Delhi", address: "Connaught Place, New Delhi" },
    { city: "Bangalore", address: "MG Road, Bangalore, Karnataka" },
    { city: "Hyderabad", address: "Banjara Hills, Hyderabad" },
    
  ];

  return (
    <div className="branches-page">

      <div className="branches-hero">
        <h1>Our Branches</h1>
        <p>Find AB Fintech branches near you across India.</p>
      </div>

      <div className="branches-grid">
        {branches.map((branch, index) => (
          <div className="branch-card" key={index}>
            <h3>{branch.city}</h3>
            <p>{branch.address}</p>
            <a href="#" className="map-btn">View on Map</a>
          </div>
        ))}
      </div>

    </div>
  );
}