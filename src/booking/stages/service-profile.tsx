import React from "react";
import { useActor } from "@xstate/react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { PaidOutlined, AccessTime, HelpOutline } from "@mui/icons-material";
import { useBookingService } from "src/helpers";
import Button from "src/components/button";
import CustomImage from "src/components/custom-image";
import { ExtensionUsage } from "src/types";
import styles from "src/booking/stages/service-profile.module.scss";
import Alert from "@mui/material/Alert";
import Link from "next/link";

const ServiceProfile = ({ service, parentServiceName }) => {
  const router = useRouter();
  const { bookingService } = useBookingService();
  const [, send] = useActor(bookingService);
  const { name, description, image, cta, price, rate, duration } = service;

  const getPriceInfo = () => {
    const hasFixedRate = rate === "FIXED";
    return hasFixedRate ? `STARTING PRICE` : `HOURLY RATE`;
  };

  const getExtensionsInfo = () => {
    switch (service.extensionUsage) {
      case ExtensionUsage.POSSIBLE:
        return "You can add hair extensions";

      case ExtensionUsage.REQUIRED:
        return "Requires hair extensions";

      default:
        return "Done without hair extensions";
    }
  };

  return (
    <div className={styles["profile-container"]}>
      <div>
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
          onClick={() => {}}
        >
          {parentServiceName}
        </MuiButton>
        <h3>{name}</h3>
        <div className={styles.iconInfoContainer}>
          <div>
            <HelpOutline fontSize="large" />
            <p>{getExtensionsInfo()}</p>
          </div>
          <div>
            <AccessTime fontSize="large" />
            <p>{duration}</p>
          </div>
          <div>
            <PaidOutlined fontSize="large" />
            <div className={styles.priceInfoContainer}>
              <p>${price}</p>
              <span>{getPriceInfo()}</span>
            </div>
          </div>
        </div>
        <Alert className={styles.alertInfoContainer} severity="info">
          Prices may increase due to time required for your desired style.{" "}
          <Link href="#">
            <a>{"Here's Why"}</a>
          </Link>
        </Alert>
        <p>{description}</p>
        {cta.primary && (
          <Button
            variant="primary"
            onClick={() => send({ type: "BOOK_APPOINTMENT", service })}
          >
            Book Appointment
          </Button>
        )}
      </div>
      <CustomImage image={image} roundEdged />
    </div>
  );
};

export default ServiceProfile;
