// ServicesPage.js
import React from "react";
import "../Services/Services.css";

const ServicesPage = () => {
  // Simulated data
  const services = [
    { id: 1, name: "Pet Shower", price: "$25", icon: "🛁" },
    { id: 2, name: "Nail Cutting", price: "$15", icon: "✂️" },
    { id: 3, name: "Surgery", price: "$150", icon: "⚕️" },
    { id: 4, name: "Vaccination", price: "$30", icon: "💉" },
    { id: 5, name: "Teeth Cleaning", price: "$40", icon: "🦷" },
    { id: 6, name: "Grooming", price: "$50", icon: "💅" },
    { id: 7, name: "Boarding", price: "$35", icon: "🏠" },
    { id: 8, name: "Playtime", price: "$20", icon: "🎾" },
    { id: 9, name: "Training", price: "$60", icon: "🐾" },
    // ... more service data
  ];

  return (
    <>
      <h1 className="service-text">Our Services</h1>
      <div className="services-page">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <span className="service-icon">{service.icon}</span>
            <div className="service-details">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-price">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
