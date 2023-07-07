import React from "react";
import Layout from "src/template/page-wrapper";
import ServiceList from "src/sections/service-list";
import { serviceTypes as allServices } from "data";

export default function ServicesPage() {
  return (
    <Layout>
      <ServiceList serviceList={allServices} serviceName={"Our Services"} />
    </Layout>
  );
}
