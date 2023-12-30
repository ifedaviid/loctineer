import React from "react";
import { useRouter } from "next/router";
import Listing from "src/components/listing";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Service, Business } from "src/types";

interface Props {
  service: Service | Business;
  returnRoute?: {
    path: string;
    name: string;
  };
}

const ServiceMenu = ({ service, returnRoute = null }: Props) => {
  const router = useRouter();
  const { name, description, services } = service;
  return (
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
  );
};

export default ServiceMenu;
