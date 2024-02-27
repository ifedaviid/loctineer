import React from "react";
import Hero from "components/hero";
import Layout from "components/layout";
import { getBusinessById } from "helpers";
import { Business } from "types";

export default function HomePage({ business: stringifiedBusinessObj }) {
  const business: Business = JSON.parse(stringifiedBusinessObj);
  return (
    <Layout business={business}>
      <Hero business={business} />
    </Layout>
  );
}

export const getStaticProps = () => ({
  props: {
    business: JSON.stringify(getBusinessById(process.env.BUSINESS_ID)),
  },
});
