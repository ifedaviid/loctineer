import React from "react";
import Layout from "components/layout";
import ServiceComponent from "components/service";
import { Service } from "types";
import { createSubServicePaths } from "helpers";
import { getServiceById } from "helpers";

interface Props {
  service: string;
  parentService: string;
}

export default function SubServicesPage({
  service: stringifiedService,
  parentService: stringifiedParentService
}: Props) {
  const service: Service = JSON.parse(stringifiedService);
  const parentService: Service = JSON.parse(stringifiedParentService);
  return (
    <Layout>
      <ServiceComponent
        service={service}
        returnRoute={{
          name: parentService?.name,
          path: parentService?.cta?.primary?.href,
        }}
      />
    </Layout>
  );
}

export const getStaticPaths = () => ({
  paths: createSubServicePaths(),
  fallback: false,
});

export const getStaticProps = ({ params }) => ({
  props: {
    service: JSON.stringify(getServiceById(params["sub-service"])?.service),
    parentService: JSON.stringify(getServiceById(params["sub-service"])?.parent),
  },
});
