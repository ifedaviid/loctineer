import React, { useState } from "react";
import { AddingExtensions } from "src/booking/stages";
import Layout from "src/template/page-wrapper";
import {
  braidsAndTwistsServices,
  dreadlockMaintenanceServices,
  dreadlocksServices,
  naturalHairLockingServices,
  serviceTypes,
} from "data";
import ServiceDetails from "src/sections/service-details";
import PriceVariation from "src/booking/stages/price-variation";
import { useBookingModals } from "src/helpers";
import { Service } from "src/types";
import ServiceList from "src/sections/service-list";
import {
  DREADLOCKS_MAINTENANCE,
  KINKY_PASSION_TWISTS,
  KNOTLESS_BRAIDS,
  LOC_EXTENSION_INSTALLATION,
  NATURAL_HAIR_LOCKING,
  LOCS_ID,
  BRAIDS_AND_TWISTS_ID,
  NATURAL_HAIR_LOCKING_ID,
  DREADLOCKS_MAINTENANCE_ID,
  LOC_EXTENSION_INSTALLATION_ID,
  BOX_BRAIDS_AND_TWISTS,
  BOX_BRAIDS_AND_TWISTS_ID,
  KINKY_PASSION_TWISTS_ID,
  KNOTLESS_BRAIDS_ID,
  TEMPORARY_LOCS_ID,
  TEMPORARY_LOCS,
} from "data/strings";
import { temporaryLocs } from "data/services/dreadlocks/temporary";

interface Props {
  pageTitle: string;
  subServices: string;
  rootServiceId: string;
}

export default function SubServicesPage({
  pageTitle,
  subServices: stringifiedSubServices,
  rootServiceId,
}: Props) {
  const {
    showExtensionUsageModal,
    setShowExtensionUsageModal,
    showPriceVariationModal,
    setShowPriceVariationModal,
  } = useBookingModals();
  const subServices: Service[] = JSON.parse(stringifiedSubServices);
  const getRootService = () => serviceTypes.find((x) => x.id === rootServiceId);
  const content =
    subServices && subServices.length > 1 ? (
      <ServiceList
        title={pageTitle}
        serviceList={subServices}
        returnRoute={{
          name: getRootService().name,
          path: getRootService().cta.primary.href,
        }}
      />
    ) : (
      <ServiceDetails
        service={subServices[0]}
        returnRoute={{
          name: getRootService().name,
          path: getRootService().cta.primary.href,
        }}
        setShowExtensionUsageModal={setShowExtensionUsageModal}
        setShowPriceVariationModal={setShowPriceVariationModal}
      />
    );

  return (
    <Layout>
      {content}
      {showPriceVariationModal && (
        <PriceVariation setShowModal={setShowPriceVariationModal} />
      )}
      {showExtensionUsageModal && (
        <AddingExtensions
          setShowModal={setShowExtensionUsageModal}
          service={subServices[0] || null}
        />
      )}
    </Layout>
  );
}

export const getStaticPaths = () => ({
  paths: [
    {
      params: {
        "sub-service": NATURAL_HAIR_LOCKING_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": DREADLOCKS_MAINTENANCE_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": LOC_EXTENSION_INSTALLATION_ID,
        "root-service": LOCS_ID,
      },
    },
    {
      params: {
        "sub-service": TEMPORARY_LOCS_ID,
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
  let subServices, pageTitle;
  switch (params["sub-service"]) {
    // For services with sub-services
    case NATURAL_HAIR_LOCKING_ID:
      pageTitle = NATURAL_HAIR_LOCKING;
      subServices = naturalHairLockingServices;
      break;

    case DREADLOCKS_MAINTENANCE_ID:
      pageTitle = DREADLOCKS_MAINTENANCE;
      subServices = dreadlockMaintenanceServices;
      break;

    case LOC_EXTENSION_INSTALLATION_ID:
      pageTitle = LOC_EXTENSION_INSTALLATION;
      subServices = [
        dreadlocksServices.find((x) => x.id === LOC_EXTENSION_INSTALLATION_ID),
      ];
      break;

    case TEMPORARY_LOCS_ID:
      pageTitle = TEMPORARY_LOCS;
      subServices = temporaryLocs
      break;

    // For services without sub-services
    case KNOTLESS_BRAIDS_ID:
      pageTitle = KNOTLESS_BRAIDS;
      subServices = [
        braidsAndTwistsServices.find((x) => x.id === KNOTLESS_BRAIDS_ID),
      ];
      break;

    case KINKY_PASSION_TWISTS_ID:
      pageTitle = KINKY_PASSION_TWISTS;
      subServices = [
        braidsAndTwistsServices.find((x) => x.id === KINKY_PASSION_TWISTS_ID),
      ];
      break;

    case BOX_BRAIDS_AND_TWISTS_ID:
      pageTitle = BOX_BRAIDS_AND_TWISTS;
      subServices = [
        braidsAndTwistsServices.find(
          (x) => x.id === BOX_BRAIDS_AND_TWISTS_ID
        ),
      ];
      break;

    default:
      pageTitle = null;
      subServices = [];
      break;
  }
  return {
    props: {
      pageTitle,
      subServices: JSON.stringify(subServices),
      rootServiceId: params["root-service"],
    },
  };
};
