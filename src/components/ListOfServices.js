import React from "react";
import Service from "./Service";
import './Services.css'

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
  return <div className="d-flex justify-content-evenly services">{listOfServices}</div>;
}

export default ListOfServices;
