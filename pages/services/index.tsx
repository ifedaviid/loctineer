import React from "react";
import Layout from "src/page-wrapper";
import Listing from "src/components/listing";
import { serviceTypes } from "data";

export default function Services() {
  return (
    <Layout>
      <section className="gray">
        <h2>Our Services</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div className="services-content">
          {serviceTypes.map((option, idx) => (
            <Listing key={idx} service={option} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
