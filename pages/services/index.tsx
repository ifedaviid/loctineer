import React from "react";
import Layout from "src/template/page-wrapper";
import ServiceMenu from "src/components/service-menu";
import { business } from "data";

export default function ServicesPage() {
  return (
    <Layout>
      <ServiceMenu
        title="Services"
        services={business.services}
        returnRoute={{ path: "/", name: "Back to Home" }}
      />
    </Layout>
  );
}
