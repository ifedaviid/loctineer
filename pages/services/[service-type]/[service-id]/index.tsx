import React, { useState } from "react";
import { AddingExtensions } from "src/booking/stages";
import Layout from "src/template/page-wrapper";
import { braidsAndTwistsServices, dreadlocksServices, strings } from "data";
import Service from "src/sections/service";
import { Service as ServiceAsDataType } from "src/types";

interface Props {
  service: ServiceAsDataType;
  serviceTypeName: string;
}

export default function ServicePage({ service, serviceTypeName }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
      <Service
        service={service}
        serviceTypeName={serviceTypeName}
        setShowModal={setShowModal}
      />
      {showModal && (
        <AddingExtensions setShowModal={setShowModal} service={service} />
      )}
    </Layout>
  );
}

const {
  LOC_REPAIR_ID,
  LOC_RETWIST_ID,
  LOC_STYLING_ID,
  SISTER_LOCS_ID,
  NATURAL_INSTANT_DREADLOCKS_ID,
  TWO_STRAND_STARTER_LOCS_ID,
  FAUX_LOCS_ID,
  SOFT_LOCS_ID,
  BUTTERFLY_DISTRESSED_LOCS_ID,
  BOX_BRAIDS_AND_TWISTS_ID,
  KINKY_PASSION_TWISTS_ID,
  KNOTLESS_BRAIDS_ID,
} = strings;

export const getStaticPaths = () => ({
  paths: [
    {
      params: { "service-id": LOC_REPAIR_ID, "service-type": strings.LOCS_ID },
    },
    {
      params: { "service-id": LOC_RETWIST_ID, "service-type": strings.LOCS_ID },
    },
    {
      params: { "service-id": LOC_STYLING_ID, "service-type": strings.LOCS_ID },
    },
    {
      params: { "service-id": SISTER_LOCS_ID, "service-type": strings.LOCS_ID },
    },
    {
      params: {
        "service-id": NATURAL_INSTANT_DREADLOCKS_ID,
        "service-type": strings.LOCS_ID,
      },
    },
    {
      params: {
        "service-id": TWO_STRAND_STARTER_LOCS_ID,
        "service-type": strings.LOCS_ID,
      },
    },
    {
      params: {
        "service-id": FAUX_LOCS_ID,
        "service-type": strings.BRAIDS_AND_TWISTS_ID,
      },
    },
    {
      params: {
        "service-id": SOFT_LOCS_ID,
        "service-type": strings.BRAIDS_AND_TWISTS_ID,
      },
    },
    {
      params: {
        "service-id": BUTTERFLY_DISTRESSED_LOCS_ID,
        "service-type": strings.BRAIDS_AND_TWISTS_ID,
      },
    },
    {
      params: {
        "service-id": BOX_BRAIDS_AND_TWISTS_ID,
        "service-type": strings.BRAIDS_AND_TWISTS_ID,
      },
    },
    {
      params: {
        "service-id": KINKY_PASSION_TWISTS_ID,
        "service-type": strings.BRAIDS_AND_TWISTS_ID,
      },
    },
    {
      params: {
        "service-id": KNOTLESS_BRAIDS_ID,
        "service-type": strings.BRAIDS_AND_TWISTS_ID,
      },
    },
  ],
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const services =
    params["service-type"] === strings.LOCS_ID
      ? dreadlocksServices
      : braidsAndTwistsServices;
  const service = services.find((obj) => obj.id === params["service-id"]);
  return {
    props: {
      service: JSON.parse(JSON.stringify(service)),
      serviceTypeName: params["service-type"],
    },
  };
};
