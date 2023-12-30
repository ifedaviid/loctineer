import React from "react";
import Layout from "src/template/page-wrapper";
import ServiceMenu from "src/components/service-menu";
import { business } from "data";

export default function ServicesPage() {
  return (
    <Layout>
      <ServiceMenu
        service={{ ...business, name: 'Services', description: 'We offer both maintenance and styling services for locs and braids. Check out our menu for available services we can offer you.', logo: null }}
        returnRoute={{ path: "/", name: "Back to Home" }}
      />
    </Layout>
  );
}
