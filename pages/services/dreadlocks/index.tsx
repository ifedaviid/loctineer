import React from "react";
import Layout from "../../../components/layout";
import Listing from "../../../components/listing";
import { dreadlocksServices } from "../../../data";

export default function Dreadlocks() {
  return (
    <Layout>
      <section className="gray">
        <h2>Dreadlocks Services</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div className="services-content">
          {dreadlocksServices.map((option, idx) => {
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
    </Layout>
  );
}
