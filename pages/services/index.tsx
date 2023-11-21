import React from "react";
import Layout from "src/template/page-wrapper";
import ServiceMenu from "src/components/service-menu";
import { serviceTypes as allServices } from "data";

export default function ServicesPage() {
  return (
    <Layout>
      <ServiceMenu
        title={"Our Services"}
        services={allServices}
        returnRoute={{ path: "/", name: "Back to Home" }}
      />
    </Layout>
  );
}
