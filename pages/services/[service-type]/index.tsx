import React from "react";
import { strings } from "data";
import Services from "src/pages/services";
import { Service } from "src/types/service";

interface Props {
  serviceType: Service;
}

const ServicesPage = ({ serviceType }: Props) => (
  <Services serviceTypeId={serviceType.id} />
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

export default ServicesPage;
