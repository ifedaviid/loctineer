import React from "react";
import Layout from "../../../../src/layout";
import { Confirmation } from "../../../../src/booking";

const ConfirmBooking = ({ invitee_email: email, answer_1: phoneNumber }) => {
  if (!email && !phoneNumber) return null;

  return (
    <Layout>
      <section className="gray">
        <Confirmation email={email} phoneNumber={phoneNumber} />
      </section>
    </Layout>
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
