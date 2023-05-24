import React from "react";
import { useActor } from "@xstate/react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { PaidOutlined, AccessTime, HelpOutline } from "@mui/icons-material";
import { useBookingService } from "src/hooks/useBookingService";
import Button from "src/button";
import CustomImage from "src/custom-image";
import { ExtensionUsage } from "src/types/extension-usage";
import { strings } from "data";
import styles from "src/booking/service-profile.module.scss";

const ServiceProfile = ({ service, serviceTypeName }) => {
  const router = useRouter();
  const { bookingService } = useBookingService();
  const [, send] = useActor(bookingService);
  const { name, description, image, cta, price, rate, duration } = service;

  const getPriceInfo = () => {
    const hasFixedRate = rate === "FIXED";
    return hasFixedRate ? `FIXED PRICE` : `HOURLY RATE`;
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

  const getParentPage = () => {
    switch (serviceTypeName) {
      case strings.LOCS_ID:
        return {
          title: "Dreadlocks",
          url: `/services/${strings.LOCS_ID}`,
        };

      case strings.BRAIDS_AND_TWISTS_ID:
        return {
          title: "Braid & Twists",
          url: `/services/${strings.BRAIDS_AND_TWISTS_ID}`,
        };

      default:
        return { title: "Return Home", url: `/` };
    }
  };

  const parentPage = getParentPage();

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
          onClick={() => router.push(parentPage.url)}
        >
          {parentPage.title}
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
