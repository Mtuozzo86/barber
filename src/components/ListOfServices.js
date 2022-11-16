import React from "react";
import Service from "./Service";
import "./Services.css";

function ListOfServices({ services }) {
  const listOfServices = services.map((service) => (
    <Service
      key={service.serviceName}
      serviceName={service.serviceName}
      time={service.time}
      icon={service.icon}
      photo={service.photo}
    />
  ));
  return (
    <div className="services">
      <h1 className="text-center ">SERVICES</h1>
      <div className="d-flex flex-wrap justify-content-evenly services">
        {listOfServices}
      </div>
    </div>
  );
}

export default ListOfServices;
