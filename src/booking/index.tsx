import React, { useState, useEffect } from "react";
export { default as ServiceProfile } from "src/booking/service-profile";
export { default as AddingExtensions } from "src/booking/adding-extensions";
export { default as SelectSchedule } from "src/booking/select-schedule";
import {
  ServiceProfile,
  SelectSchedule,
} from "src/booking";
import { Service } from "src/types";

interface Props {
  service: Service;
  returnRoute?: {
    path: string;
    name: string;
  };
  setShowPriceVariationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartBooking = ({
  service,
  returnRoute,
  setShowPriceVariationModal,
}: Props) => {
  const [isBookingAppointment, setIsBookingAppointment] = useState(false);

  return (
    <section>
      {isBookingAppointment ?
        <SelectSchedule service={service} setIsBookingAppointment={setIsBookingAppointment} />
        :
        <ServiceProfile
          service={service}
          returnRoute={returnRoute}
          setIsBookingAppointment={setIsBookingAppointment}
          setShowPriceVariationModal={setShowPriceVariationModal}
        />
      }
    </section>
  );
};

export default StartBooking;
