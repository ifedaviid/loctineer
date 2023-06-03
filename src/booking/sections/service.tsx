import React, { useEffect } from "react";
import {
  ServiceProfile,
  SelectExtensionLength,
  SelectHairLength,
  SelectSchedule,
} from "src/booking/stages";
import { useActor } from "@xstate/react";
import Button from "src/components/button";
import { bookingMachine } from "src/booking/booking-machine";
import { useBookingService } from "src/helpers";
import { Service } from "src/types";

interface Props {
  service: Service;
  serviceTypeName: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Service = ({ service, serviceTypeName, setShowModal }: Props) => {
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
  );
};

export default Service;
