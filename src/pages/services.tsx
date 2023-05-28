import React from "react";
import Layout from "src/template/page-wrapper";
import Listing from "src/components/listing";
import { braidsAndTwistsServices, dreadlocksServices, strings } from "data";
import { Service } from "src/types/service";

let name: string, data: Array<Service>;

interface Props {
  serviceTypeId: string;
}

export default function Services({ serviceTypeId }: Props) {
  switch (serviceTypeId) {
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
          {data.map((option, idx) => (
            <Listing key={idx} service={option} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
