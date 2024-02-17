import React from "react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Layout from "components/layout";
import Listing from "components/listing";
import { business } from "data/loctineer";

export default function ServicesPage() {
  const router = useRouter();
  const returnRoute = { path: "/", name: "Back to Home" }
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
        <h2>Services</h2>
        <div className="services-content">
          {business.services.map((option, idx) => (
            <Listing key={idx} service={option} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
