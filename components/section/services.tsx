import React from "react";
import { serviceTypes } from "../../data";
import Listing from "../listing";

const Services = () => {
  return (
    <section className="gray">
      <h2 style={{ marginTop: "unset" }}>We specialize in...</h2>
      <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
      <div className="services-content">
        {serviceTypes.map((option, idx) => {
          const { image, name, description, cta } = option;
          return (
            <Listing
              key={idx}
              image={image}
              title={name}
              description={description}
              cta={cta}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
