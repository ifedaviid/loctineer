import React from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from "../../hooks/useBookingService";
import Button from "../button";
import CustomImage from "../custom-image";
import { ExtensionUsage } from "../../types/extension-usage";
import { Paid, AccessTime, HelpOutline } from "@mui/icons-material";
import styles from "./service-profile.module.scss";

const ServiceProfile = ({ service }) => {
  const { bookingService } = useBookingService();
  const [, send] = useActor(bookingService);
  const { name, description, image, cta, price, rate, duration } = service;

  const getPriceInfo = () => {
    const hasFixedRate = rate === "FIXED";
    return hasFixedRate ? `$${price}.00 fixed price` : `$${price} hourly rate`;
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
        <h3>{name}</h3>
        <p>{description}</p>
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
            <Paid fontSize="large" />
            <p>{getPriceInfo()}</p>
          </div>
        </div>
        {cta.primary && (
          <Button
            variant="primary"
            onClick={() => send({ type: "BOOK_APPOINTMENT", service })}
          >
            Book Appointment
          </Button>
        )}
      </div>
      <CustomImage image={image} />
    </div>
  );
};

export default ServiceProfile;
