import React, { useState } from "react";
import { AddingExtensions } from "src/booking/stages";
import Layout from "src/template/page-wrapper";
import {
  braidsAndTwistsServices,
  dreadlockMaintenanceServices,
  dreadlocksServices,
  naturalHairLockingServices,
} from "data";
import ServiceDetails from "src/sections/service-details";
import PriceVariation from "src/booking/stages/price-variation";
import { useBookingModals } from "src/helpers";
import { Service } from "src/types";
import {
  BRAIDS_AND_TWISTS_ID,
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
} from "data/strings";

interface Props {
  leafService: string;
  subServiceId: string;
  rootServiceId: string;
}

export default function LeafServicePage({
  leafService: stringifiedServiceData,
  subServiceId,
  rootServiceId,
}: Props) {
  const {
    showExtensionUsageModal,
    setShowExtensionUsageModal,
    showPriceVariationModal,
    setShowPriceVariationModal,
  } = useBookingModals();
  const leafService: Service = JSON.parse(stringifiedServiceData);
  const getSubService = () => {
    let subServices;
    switch (rootServiceId) {
      case LOCS_ID:
        subServices = dreadlocksServices;
        break;

      case BRAIDS_AND_TWISTS_ID:
        subServices = braidsAndTwistsServices;
        break;

      default:
        subServices = [];
        break;
    }
    const subService = subServices.find((x) => x.id === subServiceId);
    return subService;
  };

  return (
    <Layout>
      <ServiceDetails
        service={leafService}
        returnRoute={{
          name: getSubService().name,
          path: getSubService().cta.primary.href,
        }}
        setShowExtensionUsageModal={setShowExtensionUsageModal}
        setShowPriceVariationModal={setShowPriceVariationModal}
      />
      {showPriceVariationModal && (
        <PriceVariation setShowModal={setShowPriceVariationModal} />
      )}
      {showExtensionUsageModal && (
        <AddingExtensions
          setShowModal={setShowExtensionUsageModal}
          service={leafService}
        />
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
      leafService: JSON.stringify(serviceData),
      subServiceId: params["sub-service"],
      rootServiceId: params["root-service"],
    },
  };
};
