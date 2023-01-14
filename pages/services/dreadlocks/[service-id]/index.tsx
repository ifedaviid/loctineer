import React, { useEffect, useState } from "react";
import { useActor } from "@xstate/react";
import {
  ServiceProfile,
  AddingExtensions,
  SelectExtensionLength,
  SelectHairLength,
  SelectSchedule,
} from "../../../../components/booking/index";
import Layout from "../../../../components/layout";
import { Service } from "../../../../types/service";
import Button from "../../../../components/button";
import { getServicePaths } from "../../../../data-fetch/static-paths";
import { getServiceProps } from "../../../../data-fetch/static-props";
import { bookingMachine } from "../../../../context/booking-machine";
import { useBookingService } from "../../../../hooks/useBookingService";

interface Props {
  service: Service;
}

const DreadlocksService = ({ service }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  console.log("context -", state.context);

  const atStart =
    state.value === bookingMachine.initialState.value ||
    state.matches("selectExtensionUsage");

  useEffect(() => {
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
          <ServiceProfile service={service} />
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

const isDreadlocks = true;
export const getStaticPaths = () => getServicePaths(isDreadlocks);
export const getStaticProps = ({ params }) =>
  getServiceProps(params, isDreadlocks);
export default DreadlocksService;
