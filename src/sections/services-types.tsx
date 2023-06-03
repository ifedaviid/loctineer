import React from "react";
import Listing from "src/components/listing";
import { serviceTypes } from "data";

const ServiceTypes = () => {
  return (
    <section className="gray">
      <h2 style={{ marginTop: "unset" }}>Services</h2>
      <p>{`We specialize in dreadlocks and braiding services ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
      <div className="services-content">
        {serviceTypes.map((option, idx) => (
          <Listing key={idx} service={option} />
        ))}
      </div>
    </section>
  );
};

export default ServiceTypes;
