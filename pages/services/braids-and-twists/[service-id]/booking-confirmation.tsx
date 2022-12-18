import React from "react";
import Layout from "../../../../components/layout";
import { Confirmation } from "../../../../components/booking";
import { getQueryParamsFromCalendly } from "../../../../data-fetch";

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

export const getServerSideProps = (context) =>
  getQueryParamsFromCalendly(context);

export default ConfirmBooking;
