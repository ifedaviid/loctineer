import React from "react";
import { useActor } from "@xstate/react";
import { InlineWidget } from "react-calendly";
import Button from "../button";
import { useBookingService } from "../../context/useBookingService";
import ButtonGroupWrapper from "../button-group-wrapper";

const SelectSchedule = () => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  const getExtensionUsageDetails = () => {
    const yes = "Yes! I will be using extensions";
    const no = "No! I don't want to use extensions";
    const { addingExtensions, extensionLength } = state.context;
    const extensionUsage = addingExtensions ? yes : no;
    const details = extensionUsage.concat(" ", extensionLength.category, " ");
    return details;
  };

  const getNaturalHairDetails = () => {
    const { hairLength } = state.context;
    return hairLength.category;
  };

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
        url={`https://calendly.com/loctineer/sister-locs?hide_gdpr_banner=1&a2=${getExtensionUsageDetails()}&a3=${getNaturalHairDetails()}`}
        pageSettings={{
          primaryColor: "a57b21",
          // hideEventTypeDetails: true,
          // backgroundColor: "201f1f",
          // textColor: "ffffff",
        }}
      />
      <ButtonGroupWrapper>
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
      </ButtonGroupWrapper>
    </div>
  );
};

export default SelectSchedule;
