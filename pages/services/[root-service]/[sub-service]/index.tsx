import React from "react";
import Layout from "src/components/layout";
import ServiceComponent from "src/components/service";
import { Service } from "src/types";
import {
  INSTANT_LOCS_ID,
  TWO_STRAND_STARTER_LOCS_ID,
  SISTER_LOCS_ID,
  MICRO_LOCS_ID,
  WICKS_ID,
  LOC_RETWIST_ID,
  LOC_REPAIR_ID,
  FAUX_LOCS_ID,
  BUTTERFLY_DISTRESSED_LOCS_ID,
  SOFT_LOCS_ID,
  LOCS_ID,
  BRAIDS_AND_TWISTS_ID,
  BOX_BRAIDS_AND_TWISTS_ID,
  KINKY_PASSION_TWISTS_ID,
  KNOTLESS_BRAIDS_ID,
} from "data/strings";
import { getServiceById } from "src/helpers";

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
  paths: [
    {
      params: {
        "sub-service": INSTANT_LOCS_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": TWO_STRAND_STARTER_LOCS_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": SISTER_LOCS_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": MICRO_LOCS_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": WICKS_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": FAUX_LOCS_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": SOFT_LOCS_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": BUTTERFLY_DISTRESSED_LOCS_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": LOC_REPAIR_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": LOC_RETWIST_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": BOX_BRAIDS_AND_TWISTS_ID,
        "root-service": BRAIDS_AND_TWISTS_ID,
      },
    },
    {
      params: {
        "sub-service": KINKY_PASSION_TWISTS_ID,
        "root-service": BRAIDS_AND_TWISTS_ID,
      },
    },
    {
      params: {
        "sub-service": KNOTLESS_BRAIDS_ID,
        "root-service": BRAIDS_AND_TWISTS_ID,
      },
    },
  ],
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  return {
    props: {
      service: JSON.stringify(getServiceById(params["sub-service"])?.service),
      parentService: JSON.stringify(getServiceById(params["sub-service"])?.parent),
    },
  };
};
