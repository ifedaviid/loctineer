import React, { useState } from "react";
import { AddingExtensions } from "src/booking/stages";
import Layout from "src/template/page-wrapper";
import {
  dreadlockMaintenanceServices,
  naturalHairLockingServices,
  strings,
} from "data";
import ServiceDetails from "src/sections/service-details";
import { Service } from "src/types";

const {
  LOCS_ID,
  NATURAL_HAIR_LOCKING_ID,
  DREADLOCKS_MAINTENANCE_ID,
  INSTANT_DREADLOCKS_ID,
  TWO_STRAND_STARTER_LOCS_ID,
  SISTER_LOCS_ID,
  MICRO_LOCS_ID,
  WICKS_ID,
  LOC_RETWIST_ID,
  LOC_REPAIR_ID,
  LOC_STYLING_ID,
} = strings;

interface Props {
  serviceData: string;
  serviceName: string;
  parentServiceName: string;
}

export default function LeafServicePage({
  serviceData: stringifiedServiceData,
  parentServiceName,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const serviceData: Service = JSON.parse(stringifiedServiceData);
  return (
    <Layout>
      <ServiceDetails
        service={serviceData}
        parentServiceName={parentServiceName}
        setShowModal={setShowModal}
      />
      {showModal && (
        <AddingExtensions setShowModal={setShowModal} service={serviceData} />
      )}
    </Layout>
  );
}

export const getStaticPaths = () => ({
  paths: [
    {
      params: {
        "leaf-service": INSTANT_DREADLOCKS_ID,
        "sub-service": NATURAL_HAIR_LOCKING_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "leaf-service": TWO_STRAND_STARTER_LOCS_ID,
        "sub-service": NATURAL_HAIR_LOCKING_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "leaf-service": SISTER_LOCS_ID,
        "sub-service": NATURAL_HAIR_LOCKING_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "leaf-service": MICRO_LOCS_ID,
        "sub-service": NATURAL_HAIR_LOCKING_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "leaf-service": WICKS_ID,
        "sub-service": NATURAL_HAIR_LOCKING_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "leaf-service": LOC_RETWIST_ID,
        "sub-service": DREADLOCKS_MAINTENANCE_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "leaf-service": LOC_REPAIR_ID,
        "sub-service": DREADLOCKS_MAINTENANCE_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "leaf-service": LOC_STYLING_ID,
        "sub-service": DREADLOCKS_MAINTENANCE_ID,
        "root-service": LOCS_ID,
      },
    },
  ],
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  let serviceData;
  switch (params["leaf-service"]) {
    // For services with sub-services
    case INSTANT_DREADLOCKS_ID:
      serviceData = naturalHairLockingServices.find(
        (x) => x.id === INSTANT_DREADLOCKS_ID
      );
      break;

    case TWO_STRAND_STARTER_LOCS_ID:
      serviceData = naturalHairLockingServices.find(
        (x) => x.id === TWO_STRAND_STARTER_LOCS_ID
      );
      break;

    case SISTER_LOCS_ID:
      serviceData = naturalHairLockingServices.find(
        (x) => x.id === SISTER_LOCS_ID
      );
      break;

    case MICRO_LOCS_ID:
      serviceData = naturalHairLockingServices.find(
        (x) => x.id === MICRO_LOCS_ID
      );
      break;

    case WICKS_ID:
      serviceData = naturalHairLockingServices.find((x) => x.id === WICKS_ID);
      break;

    case LOC_RETWIST_ID:
      serviceData = dreadlockMaintenanceServices.find(
        (x) => x.id === LOC_RETWIST_ID
      );
      break;

    case LOC_REPAIR_ID:
      serviceData = dreadlockMaintenanceServices.find(
        (x) => x.id === LOC_REPAIR_ID
      );
      break;

    case LOC_STYLING_ID:
      serviceData = dreadlockMaintenanceServices.find(
        (x) => x.id === LOC_STYLING_ID
      );
      break;

    default:
      serviceData = [];
      break;
  }
  return {
    props: {
      serviceData: JSON.stringify(serviceData),
      parentServiceName: params["sub-service"],
    },
  };
};
