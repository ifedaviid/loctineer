import React from "react";
import Layout from "src/template/page-wrapper";
import ServiceList from "src/sections/service-list";
import { braidsAndTwistsServices, dreadlocksServices, strings } from "data";
import { Service } from "src/types";
import {
  LOCS,
  LOCS_ID,
  BRAIDS_AND_TWISTS,
  BRAIDS_AND_TWISTS_ID,
} from "data/strings";

export default function RootServicesPage({
  pageTitle,
  rootServices: stringifiedRootServiceData,
}) {
  const rootServices: Service[] = JSON.parse(stringifiedRootServiceData);
  return (
    <Layout>
      <ServiceList
        title={pageTitle}
        serviceList={rootServices}
        returnRoute={{ path: "/services", name: "All Services" }}
      />
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
  let rootServiceData: Service[], pageTitle: string;
  switch (params["root-service"]) {
    case BRAIDS_AND_TWISTS_ID:
      pageTitle = BRAIDS_AND_TWISTS;
      rootServiceData = braidsAndTwistsServices;
      break;

    default:
      pageTitle = LOCS;
      rootServiceData = dreadlocksServices;
      break;
  }
  return {
    props: {
      pageTitle,
      rootServices: JSON.stringify(rootServiceData),
    },
  };
};
