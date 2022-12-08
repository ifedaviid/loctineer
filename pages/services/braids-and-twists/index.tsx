import React from "react";
import Layout from "../../../components/layout";
import Listing from "../../../components/listing";
import { braidsAndTwistsServices } from "../../../data";

export default function BraidsAndTwists() {
  return (
    <Layout>
      <section className="gray">
        <h2>Braids and Twists Services</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div className="services-content">
          {braidsAndTwistsServices.map((option, idx) => {
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
