import React from "react";
import Layout from "src/template/page-wrapper";
import ServiceList from "src/sections/service-list";
import { braidsAndTwistsServices, dreadlocksServices, strings } from "data";
import { Service } from "src/types";

const { LOCS, LOCS_ID, BRAIDS_AND_TWISTS, BRAIDS_AND_TWISTS_ID } = strings;

export default function RootServicePage({
  serviceName,
  serviceData: stringifiedServiceData,
}) {
  const serviceData: Service[] = JSON.parse(stringifiedServiceData);
  return (
    <Layout>
      <ServiceList serviceList={serviceData} serviceName={serviceName} />
    </Layout>
  );
}

export const getStaticPaths = () => ({
  paths: [
    { params: { "root-service": LOCS_ID } },
    { params: { "root-service": BRAIDS_AND_TWISTS_ID } },
  ],
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  let serviceName: string, serviceData: Service[];
  switch (params["root-service"]) {
    case BRAIDS_AND_TWISTS_ID:
      serviceName = BRAIDS_AND_TWISTS;
      serviceData = braidsAndTwistsServices;
      break;

    default:
      serviceName = LOCS;
      serviceData = dreadlocksServices;
      break;
  }
  return {
    props: {
      serviceName: serviceName,
      serviceData: JSON.stringify(serviceData),
    }, // will be passed to the page component as props
  };
};
