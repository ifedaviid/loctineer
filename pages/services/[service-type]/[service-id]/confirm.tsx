import React from "react";
import Success from "src/pages/confirm";

const Confirm = ({ invitee_email, answer_1 }) => (
  <Success email={invitee_email} phoneNumber={answer_1} />
);

export const getServerSideProps = ({ query }) => {
  return {
    props: {
      ...query,
    },
  };
};

export default Confirm;
