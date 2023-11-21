import React from "react";
import { useActor } from "@xstate/react";
import { InlineWidget } from "react-calendly";
import Button from "src/components/button";
import { useBookingService } from "src/helpers";
import useBookingNavigation from "./use-navigation-wrapper";
import useConfirm from "src/booking/stages/confirm-exit";
import styles from "src/booking/stages/select-schedule.module.scss";

const SelectSchedule = () => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  const [Dialog, confirmDelete] = useConfirm(
    "Are you sure?",
    "Are you sure you want to exit booking process?"
  );

  const handleExit = async () => {
    const res = await confirmDelete();
    if (res) {
      send("EXIT");
    } else {
      /* ... */
    }
  };

  const getExtensionUsageDetails = () => {
    const yes = "Yes! I will be using extensions";
    const no = "No! I don't want to use extensions";
    const { addingExtensions, extensionLength } = state.context;
    const extensionUsage = addingExtensions ? yes : no;
    const details = extensionUsage.concat(" ", extensionLength?.category, " ");
    return details;
  };

  const getNaturalHairDetails = () => {
    const { hairLength } = state.context;
    return hairLength.category;
  };

  const {
    showExitButton,
    showBackButton,
    renderExitbutton,
    renderBackbutton
  } = useBookingNavigation({ handleExit })

  return (
    <div className={styles.selectSchedule}>
      <div className={styles.navigationButtons}>
        {showBackButton && renderBackbutton()}
        {showExitButton && renderExitbutton()}
      </div>
      <InlineWidget
        url={`https://calendly.com/loctineer/sister-locs?hide_gdpr_banner=1&a2=${getExtensionUsageDetails()}&a3=${getNaturalHairDetails()}`}
        pageSettings={{
          primaryColor: "a57b21",
          // hideEventTypeDetails: true,
          backgroundColor: "201f1f",
          textColor: "ffffff",
        }}
      />
      <Dialog />
    </div>
  );
};

export default SelectSchedule;
