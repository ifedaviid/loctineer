import React from "react";
import Layout from "components/layout";
import ServiceComponent from "components/service";
import { Business, Service } from "types";
import { createSubServicePaths, getBusinessById } from "helpers";
import { getServiceById } from "helpers";

interface Props {
  business: string;
  service: string;
  parentService: string;
}

export default function SubServicesPage({
  business: stringifiedBusinessObj,
  service: stringifiedService,
  parentService: stringifiedParentService
}: Props) {
  const business: Business = JSON.parse(stringifiedBusinessObj);
  const service: Service = JSON.parse(stringifiedService);
  const parentService: Service = JSON.parse(stringifiedParentService);
  return (
    <Layout business={business}>
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

export const getStaticPaths = () => {
  const business = getBusinessById(process.env.BUSINESS_ID)
  return {
    paths: createSubServicePaths(business),
    fallback: false
  }
};

export const getStaticProps = ({ params }) => {
  const business = getBusinessById(process.env.BUSINESS_ID)
  const subService = getServiceById(business, params["sub-service"])?.service
  const rootService = getServiceById(business, params["sub-service"])?.parent
  return {
    props: {
      business: JSON.stringify(business),
      service: JSON.stringify(subService),
      parentService: JSON.stringify(rootService),
    }
  };
};
