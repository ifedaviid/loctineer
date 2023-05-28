import React from "react";
import { strings } from "data";
import ServiceType from "src/pages/service-type";
import { Service } from "src/types/service";

interface Props {
  serviceType: Service;
}

const ServiceTypePage = ({ serviceType }: Props) => (
  <ServiceType serviceType={serviceType} />
);

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

export default ServiceTypePage;
