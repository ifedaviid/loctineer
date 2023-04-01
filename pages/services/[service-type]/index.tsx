import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../components/layout";
import Listing from "../../../components/listing";
import {
  braidsAndTwistsServices,
  dreadlocksServices,
  strings,
} from "../../../data";
import { Service } from "../../../types/service";

let name: string, data: Array<Service>;

export default function ServiceType({ serviceType }) {
  switch (serviceType) {
    case strings.BRAIDS_AND_TWISTS_ID:
      name = strings.BRAIDS_AND_TWISTS;
      data = braidsAndTwistsServices;
      break;

    default:
      name = strings.LOCS;
      data = dreadlocksServices;
      break;
  }

  return (
    <Layout>
      <section className="gray">
        <h2>{name} Services</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div className="services-content">
          {data.map((option, idx) => {
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

export const getStaticPaths = () => ({
  paths: [
    { params: { "service-type": strings.LOCS_ID } },
    { params: { "service-type": strings.BRAIDS_AND_TWISTS_ID } },
  ],
  fallback: false,
});
export async function getStaticProps(context) {
  return {
    props: {
      serviceType: context.params["service-type"],
    }, // will be passed to the page component as props
  };
}
