import React from "react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Layout from "components/layout";
import Card from "components/card";
import { getBusinessById, getServiceById } from "helpers";
import { Business, Service } from "types";
import { createRootServicePaths } from "helpers";

interface Props {
  business: string;
  service: string;
}

export default function RootServicesPage({
  business: stringifiedBusinessObj,
  service: stringifiedServiceObj,
}: Props) {
  const router = useRouter();
  const returnRoute = { path: '/services', name: 'All Services' }
  const business: Business = JSON.parse(stringifiedBusinessObj);
  const service: Service = JSON.parse(stringifiedServiceObj);
  const { name, description, services } = service;
  return (
    <Layout business={business}>
      <section style={{ padding: '3rem 5%' }}>
        {returnRoute && (
          <MuiButton
            sx={{
              textTransform: "none",
              letterSpacing: "2px",
              color: "lightgray",
              justifyContent: "flex-start",
              padding: "0.5rem",
              fontFamily: "inherit",
            }}
            size="medium"
            startIcon={<ChevronLeftIcon />}
            onClick={() => router.push(returnRoute.path)}
          >
            {returnRoute.name}
          </MuiButton>
        )}
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="services-content">
          {services.map((option, idx) => (
            <Card key={idx} service={option} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = () => ({
  paths: createRootServicePaths(getBusinessById(process.env.BUSINESS_ID)),
  fallback: false
});

export const getStaticProps = ({ params }) => {
  const business = getBusinessById(process.env.BUSINESS_ID)
  const service = getServiceById(business, params["root-service"])?.service
  return {
    props: {
      business: JSON.stringify(business),
      service: JSON.stringify(service),
    },
  }
};
