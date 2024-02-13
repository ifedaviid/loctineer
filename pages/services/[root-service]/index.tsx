import React from "react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Layout from "src/layout";
import Listing from "src/components/listing";
import { getServiceById } from "src/helpers";
import { Service } from "src/types";
import { LOCS_ID, BRAIDS_AND_TWISTS_ID } from "data/strings";

export default function RootServicesPage({
  service: stringifiedServiceObj,
}) {
  const router = useRouter();
  const returnRoute = { path: '/services', name: 'All Services' }
  const service: Service = JSON.parse(stringifiedServiceObj);
  const { name, description, services } = service;
  return (
    <Layout>
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
            <Listing key={idx} service={option} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = () => ({
  paths: [
    { params: { "root-service": LOCS_ID } },
    { params: { "root-service": BRAIDS_AND_TWISTS_ID } },
  ],
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  return {
    props: {
      service: JSON.stringify(getServiceById(params["root-service"])?.service),
    },
  };
};
