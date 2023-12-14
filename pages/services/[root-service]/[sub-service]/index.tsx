import React from "react";
import { AddingExtensions } from "src/booking";
import Layout from "src/template/page-wrapper";
import {
  braidsAndTwistsServices,
  locs,
  serviceTypes,
} from "data";
import StartBooking from "src/booking";
import PriceVariation from "src/booking/price-variation";
import { useBookingModals } from "src/helpers";
import { Service } from "src/types";
import ServiceMenu from "src/components/service-menu";
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
  KINKY_PASSION_TWISTS,
  KNOTLESS_BRAIDS,
  LOCS_ID,
  BRAIDS_AND_TWISTS_ID,
  BOX_BRAIDS_AND_TWISTS,
  BOX_BRAIDS_AND_TWISTS_ID,
  KINKY_PASSION_TWISTS_ID,
  KNOTLESS_BRAIDS_ID,
  LOC_REPAIR,
  LOC_RETWIST,
  BUTTERFLY_DISTRESSED_LOCS,
  SOFT_LOCS,
  FAUX_LOCS,
  WICKS,
  MICRO_LOCS,
  SISTER_LOCS,
  TWO_STRAND_STARTER_LOCS,
  INSTANT_LOCS,
} from "data/strings";

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
      <ServiceMenu
        title={pageTitle}
        services={subServices}
        returnRoute={{
          name: getRootService().name,
          path: getRootService().cta.primary.href,
        }}
      />
    ) : (
      <StartBooking
        service={subServices[0]}
        returnRoute={{
          name: getRootService().name,
          path: getRootService().cta.primary.href,
        }}
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
  let subServices, pageTitle;
  switch (params["sub-service"]) {
    case INSTANT_LOCS_ID:
      pageTitle = INSTANT_LOCS;
      subServices = [locs.find(
        (x) => x.id === INSTANT_LOCS_ID
      )];
      break;

    case TWO_STRAND_STARTER_LOCS_ID:
      pageTitle = TWO_STRAND_STARTER_LOCS;
      subServices = [locs.find(
        (x) => x.id === TWO_STRAND_STARTER_LOCS_ID
      )];
      break;

    case SISTER_LOCS_ID:
      pageTitle = SISTER_LOCS;
      subServices = [locs.find(
        (x) => x.id === SISTER_LOCS_ID
      )];
      break;

    case MICRO_LOCS_ID:
      pageTitle = MICRO_LOCS;
      subServices = [locs.find(
        (x) => x.id === MICRO_LOCS_ID
      )];
      break;

    case WICKS_ID:
      pageTitle = WICKS;
      subServices = [locs.find((x) => x.id === WICKS_ID)];
      break;

    case FAUX_LOCS_ID:
      pageTitle = FAUX_LOCS;
      subServices = [locs.find(
        (x) => x.id === FAUX_LOCS_ID
      )]
      break;

    case SOFT_LOCS_ID:
      pageTitle = SOFT_LOCS;
      subServices = [locs.find((x) => x.id === SOFT_LOCS_ID)];
      break;

    case BUTTERFLY_DISTRESSED_LOCS_ID:
      pageTitle = BUTTERFLY_DISTRESSED_LOCS;
      subServices = [locs.find(
        (x) => x.id === BUTTERFLY_DISTRESSED_LOCS_ID
      )];
      break;

    case LOC_RETWIST_ID:
      pageTitle = LOC_RETWIST;
      subServices = [locs.find(
        (x) => x.id === LOC_RETWIST_ID
      )];
      break;

    case LOC_REPAIR_ID:
      pageTitle = LOC_REPAIR;
      subServices = [
        locs.find((x) => x.id === LOC_REPAIR_ID)
      ]
      break;

    // For services without sub-services
    case KNOTLESS_BRAIDS_ID:
      pageTitle = KNOTLESS_BRAIDS;
      subServices = [
        braidsAndTwistsServices.find((x) => x.id === KNOTLESS_BRAIDS_ID)
      ];
      break;

    case KINKY_PASSION_TWISTS_ID:
      pageTitle = KINKY_PASSION_TWISTS;
      subServices = [
        braidsAndTwistsServices.find((x) => x.id === KINKY_PASSION_TWISTS_ID)
      ];
      break;

    case BOX_BRAIDS_AND_TWISTS_ID:
      pageTitle = BOX_BRAIDS_AND_TWISTS;
      subServices = [
        braidsAndTwistsServices.find((x) => x.id === BOX_BRAIDS_AND_TWISTS_ID)
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
