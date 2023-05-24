import React from "react";
import { CheckCircle } from "@mui/icons-material";
import Button from "src/button";
import { useRouter } from "next/router";

interface Props {
  email: string;
  phoneNumber: string;
}

const Confirmation = ({ email, phoneNumber }: Props) => {
  const router = useRouter();
  return (
    <>
      <CheckCircle sx={{ fontSize: 100, color: "#a57b21" }} />
      <h2>Yup! We got it.</h2>
      <p>
        {`Thank you booking with Loctineer! We'll send your confirmation details
      to ${email} and text you a reminder at ${phoneNumber}. See you soon!`}
      </p>
      <Button variant="primary" onClick={() => router.push("/")}>
        Return to Home
      </Button>
    </>
  );
};

export default Confirmation;
