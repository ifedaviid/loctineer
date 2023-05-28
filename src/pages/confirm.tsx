import React from "react";
import Layout from "src/template/page-wrapper";
import Success from "src/booking/stages/success";

const Confirm = ({ email, phoneNumber }) => {
  if (!email && !phoneNumber) return null;

  return (
    <Layout>
      <section className="gray">
        <Success email={email} phoneNumber={phoneNumber} />
      </section>
    </Layout>
  );
};

export default Confirm;
