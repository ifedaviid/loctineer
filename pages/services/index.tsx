import React from "react";
import Layout from "src/template/page-wrapper";
import ServiceList from "src/sections/service-list";
import { serviceTypes as allServices } from "data";

export default function ServicesPage() {
  return (
    <Layout>
      <ServiceList
        title={"Our Services"}
        serviceList={allServices}
        returnRoute={{ path: "/", name: "Back to Home" }}
      />
    </Layout>
  );
}
