import React from "react";
import PageWrapper from "../../../../components/page-wrapper";
import { Confirmation } from "../../../../components/booking";

const ConfirmBooking = ({ invitee_email: email, answer_1: phoneNumber }) => {
  if (!email && !phoneNumber) return null;

  return (
    <PageWrapper>
      <section className="gray">
        <Confirmation email={email} phoneNumber={phoneNumber} />
      </section>
    </PageWrapper>
  );
};

export const getServerSideProps = ({ query }) => {
  return {
    props: {
      ...query,
    },
  };
};

export default ConfirmBooking;
