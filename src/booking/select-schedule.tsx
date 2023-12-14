import React from "react";
import { InlineWidget } from "react-calendly";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useConfirm from "src/booking/confirm-exit";
import styles from "src/booking/select-schedule.module.scss";

const SelectSchedule = ({ service, setIsBookingAppointment }) => {
  const { calendlyEventLinkID } = service

  const [Dialog, confirmDelete] = useConfirm(
    "Are you sure?",
    "Are you sure you want to exit booking process?"
  );

  const handleExit = async () => {
    const res = await confirmDelete();
    if (res) setIsBookingAppointment(false)
  };

  return (
    <div className={styles.selectSchedule}>
      <div className={styles.navigationButtons}>
        <IconButton className={styles.backButton} color='secondary' aria-label="backward" size="large" onClick={handleExit}>
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
        <IconButton className={styles.exitButton} color="secondary" aria-label="exit" size="large" onClick={handleExit}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </div>
      <InlineWidget
        url={`https://calendly.com/loctineer/${calendlyEventLinkID}?hide_gdpr_banner=1`}
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
