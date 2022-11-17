import React from "react";
import Service from "./Service";

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
    <div className="p-5">
      <h1 className="text-center" style={{letterSpacing: '.5rem'}}>SERVICES</h1>
      <div className="d-flex flex-wrap justify-content-evenly p-5">
        {listOfServices}
      </div>
    </div>
  );
}

export default ListOfServices;
