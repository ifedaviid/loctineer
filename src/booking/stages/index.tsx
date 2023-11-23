import React, { useEffect } from "react";
export { default as ServiceProfile } from "src/booking/stages/service-profile";
export { default as AddingExtensions } from "src/booking/stages/adding-extensions";
export { default as SelectExtensionLength } from "src/booking/stages/select-extension-length";
export { default as SelectHairLength } from "src/booking/stages/select-hair-length";
export { default as SelectSchedule } from "src/booking/stages/select-schedule";
import {
  ServiceProfile,
  SelectExtensionLength,
  SelectHairLength,
  SelectSchedule,
} from "src/booking/stages";
import { useActor } from "@xstate/react";
import { useBookingService } from "src/helpers";
import { Service } from "src/types";

interface Props {
  service: Service;
  returnRoute?: {
    path: string;
    name: string;
  };
  setShowExtensionUsageModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPriceVariationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartBooking = ({
  service,
  returnRoute,
  setShowExtensionUsageModal,
  setShowPriceVariationModal,
}: Props) => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  useEffect(() => {
    // check if user was booking in progress and selected another service. if true, it send EXIT event then it will redirect to IDLE state and will reset state for new booking.
    // variable service equals current service fetched from service-name in url and state.context.service is the service stored in previous time.
    if (
      state.context?.service !== null &&
      service.id !== state.context.service.id
    ) {
      send({ type: "EXIT" });
    }
    if (state.matches("selectExtensionUsage")) setShowExtensionUsageModal(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <section>
      {(state.matches("idle") ||
        state.matches("serviceProfile") ||
        state.matches("selectExtensionUsage")) && (
          <ServiceProfile
            service={service}
            returnRoute={returnRoute}
            setShowPriceVariationModal={setShowPriceVariationModal}
          />
        )}
      {state.matches("selectExtensionLength") && <SelectExtensionLength />}
      {state.matches("selectHairLength") && <SelectHairLength />}
      {state.matches("selectSchedule") && <SelectSchedule />}
    </section>
  );
};

export default StartBooking;
