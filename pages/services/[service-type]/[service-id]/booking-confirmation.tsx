import React from "react";
import Layout from "src/template/page-wrapper";
import Confirmation from "src/sections/confirmation";

const ConfirmationPage = ({ invitee_email: email, answer_1: phoneNumber }) => {
  if (!email && !phoneNumber) return null;
  return (
    <Layout>
      <Confirmation email={email} phoneNumber={phoneNumber} />
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

export default ConfirmationPage;
