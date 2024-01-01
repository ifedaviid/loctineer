import React from "react";
import Hero from "src/components/hero";
import Layout from "src/template/page-wrapper";
import { business } from "data";

export default function HomePage() {
  return (
    <Layout>
      <Hero business={business} />
    </Layout>
  );
}
