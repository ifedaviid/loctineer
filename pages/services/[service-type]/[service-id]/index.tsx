import React, { useEffect, useState } from "react";
import { useActor } from "@xstate/react";
import {
  ServiceProfile,
  AddingExtensions,
  SelectExtensionLength,
  SelectHairLength,
  SelectSchedule,
} from "src/booking/stages";
import Layout from "src/layout";
import { Service } from "src/types/service";
import Button from "src/components/button";
import { braidsAndTwistsServices, dreadlocksServices, strings } from "data";
import { bookingMachine } from "src/booking/booking-machine";
import { useBookingService } from "src/booking/useBookingService";

interface Props {
  service: Service;
  serviceTypeName: string;
}

const ServiceID = ({ service, serviceTypeName }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  const atStart =
    state.value === bookingMachine.initialState.value ||
    state.matches("selectExtensionUsage");

  useEffect(() => {
    // check if user was booking in progress and selected another service. if true, it send EXIT event then it will redirect to IDLE state and will reset state for new booking.
    // variable service equals current service fetched from service-id in url and state.context.service is the service stored in previous time.
    if (
      state.context?.service !== null &&
      service.id !== state.context.service.id
    ) {
      send({ type: "EXIT" });
    }
    if (state.matches("selectExtensionUsage")) setShowModal(true);
  }, [state]);

  const renderBackButton = () => (
    <Button variant="tertiary" onClick={() => send("PREV")}>
      {"<   Back"}
    </Button>
  );

  return (
    <Layout>
      <section className="gray">
        {!state.done && !atStart && renderBackButton()}
        {(state.matches("idle") ||
          state.matches("serviceProfile") ||
          state.matches("selectExtensionUsage")) && (
          <ServiceProfile service={service} serviceTypeName={serviceTypeName} />
        )}
        {state.matches("selectExtensionLength") && <SelectExtensionLength />}
        {state.matches("selectHairLength") && <SelectHairLength />}
        {state.matches("selectSchedule") && <SelectSchedule />}
      </section>
      {showModal && (
        <AddingExtensions setShowModal={setShowModal} service={service} />
      )}
    </Layout>
  );
};

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

export default ServiceID;
