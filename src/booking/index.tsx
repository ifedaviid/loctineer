import React, { useState, useEffect } from "react";
export { default as ServiceProfile } from "src/booking/service-profile";
import { ServiceProfile } from "src/booking";
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
      <ServiceProfile
        service={service}
        returnRoute={returnRoute}
        isBookingAppointment={isBookingAppointment}
        setIsBookingAppointment={setIsBookingAppointment}
        setShowPriceVariationModal={setShowPriceVariationModal}
      />
    </section>
  );
};

export default StartBooking;
