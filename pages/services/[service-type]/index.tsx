import React from "react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Layout from "src/template/page-wrapper";
import Listing from "src/components/listing";
import { braidsAndTwistsServices, dreadlocksServices, strings } from "data";
import { Service } from "src/types";

let name: string, data: Array<Service>;

export default function ServiceType({ serviceType }) {
  const router = useRouter();

  switch (serviceType) {
    case strings.BRAIDS_AND_TWISTS_ID:
      name = strings.BRAIDS_AND_TWISTS;
      data = braidsAndTwistsServices;
      break;

    default:
      name = strings.LOCS;
      data = dreadlocksServices;
      break;
  }

  return (
    <Layout>
      <section className="gray">
        <MuiButton
          sx={{
            textTransform: "none",
            letterSpacing: "2px",
            color: "#4a4f4f",
            justifyContent: "flex-start",
            padding: "0.5rem 0",
            fontFamily: "inherit",
          }}
          size="medium"
          startIcon={<ChevronLeftIcon />}
          onClick={() => router.push("/services")}
        >
          All Services
        </MuiButton>
        <h2>{name} Services</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div className="services-content">
          {data.map((option, idx) => (
            <Listing key={idx} service={option} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = () => ({
  paths: [
    { params: { "service-type": strings.LOCS_ID } },
    { params: { "service-type": strings.BRAIDS_AND_TWISTS_ID } },
  ],
  fallback: false,
});

export async function getStaticProps(context) {
  return {
    props: {
      serviceType: context.params["service-type"],
    }, // will be passed to the page component as props
  };
}
