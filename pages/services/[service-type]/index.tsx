import React from "react";
import Layout from "src/template/page-wrapper";
import ServiceType from "src/sections/services-type";
import { strings } from "data";

export default function ServiceTypePage({ serviceType }) {
  return (
    <Layout>
      <ServiceType serviceType={serviceType} />
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
