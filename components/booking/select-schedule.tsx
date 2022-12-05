import React from "react";
import { useActor } from "@xstate/react";
import { InlineWidget } from "react-calendly";
import Button from "../button";
import { useBookingService } from "../../context/useBookingService";

const SelectSchedule = () => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);
  return (
    <div style={{ width: "100%" }}>
      <h2
        style={{
          lineHeight: "3rem",
          margin: "5rem 10% 3.75rem 10%",
        }}
      >
        Finally, pick a date and time.
      </h2>
      <InlineWidget
        url="https://calendly.com/loctineer/sister-locs?hide_gdpr_banner=1"
        pageSettings={{
          // hideEventTypeDetails: true,
          backgroundColor: "201f1f",
          primaryColor: "a57b21",
          textColor: "ffffff",
        }}
        // styles={{
        //     borderTop: '1px solid #a57b21',
        //     borderBottom: '1px solid #a57b21',
        //     minWidth: '320px',
        //     minHeight: '100rem'
        // }}
      />
      <Button
        variant="secondary"
        size="large"
        onClick={() => {
          send("EXIT");
          // router.push('/')
        }}
      >
        X
      </Button>
    </div>
  );
};

export default SelectSchedule;
