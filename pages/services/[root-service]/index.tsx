import React from "react";
import Layout from "src/template/page-wrapper";
import ServiceMenu from "src/components/service-menu";
import { getServiceById } from "src/helpers";
import { Service } from "src/types";
import { LOCS_ID, BRAIDS_AND_TWISTS_ID } from "data/strings";

export default function RootServicesPage({
  service: stringifiedServiceObj,
}) {
  const service: Service = JSON.parse(stringifiedServiceObj);
  return (
    <Layout>
      <ServiceMenu
        title={service.name}
        services={service.services}
        returnRoute={{ path: '/services', name: 'All Services' }}
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
  return {
    props: {
      service: JSON.stringify(getServiceById(params["root-service"])?.service),
    },
  };
};
