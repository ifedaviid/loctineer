import React from "react";
import { CheckCircle } from "@mui/icons-material";
import Button from "../button";
import { useRouter } from "next/router";

const ConfirmBooking = () => {
  const router = useRouter();
  return (
    <>
      <CheckCircle sx={{ fontSize: 100, color: "#a57b21" }} />
      <h2>Yup! We got it.</h2>
      <p>
        {`Thank you booking with Loctineer! We'll send your confirmation details
        to .... and text you a reminder at .... See you soon!`}
      </p>
      <Button variant="primary" onClick={() => router.push("/")}>
        Return to Home
      </Button>
    </>
  );
};

export default ConfirmBooking;
