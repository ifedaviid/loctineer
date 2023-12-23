import React, { useState } from "react";
export { default as ServiceProfile } from "src/booking/service-profile";
import { ServiceProfile } from "src/booking";
import { Service } from "src/types";

interface Props {
  service: Service;
  returnRoute?: {
    path: string;
    name: string;
  };
}

const StartBooking = ({
  service,
  returnRoute,
}: Props) => {
  const [isBookingAppointment, setIsBookingAppointment] = useState(false);

  return (
    <section>
      <ServiceProfile
        service={service}
        returnRoute={returnRoute}
        isBookingAppointment={isBookingAppointment}
        setIsBookingAppointment={setIsBookingAppointment}
      />
    </section>
  );
};

export default StartBooking;
