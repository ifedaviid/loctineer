import React from "react";
import { useRouter } from "next/router";
import Listing from "src/components/listing";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Service } from "src/types";

interface Props {
  serviceList: Service[];
  serviceName: string;
  parentServiceName?: string;
}

const ServiceList = ({
  serviceList,
  serviceName,
  parentServiceName,
}: Props) => {
  const router = useRouter();
  return (
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
        {`Back to ${parentServiceName}`}
      </MuiButton>
      <h2>{serviceName}</h2>
      <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
      <div className="services-content">
        {serviceList.map((option, idx) => (
          <Listing key={idx} service={option} />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
