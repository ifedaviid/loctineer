import React, { useState } from "react";
import { useActor } from "@xstate/react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { PaidOutlined, AccessTime, HelpOutline } from "@mui/icons-material";
import { useBookingService } from "src/helpers";
import Button from "src/components/button";
import CustomImage from "src/components/custom-image";
import { Service } from "src/types";
import styles from "src/booking/stages/service-profile.module.scss";
import Alert from "@mui/material/Alert";
import ImageCarousel from "src/components/image-carousel";

interface Props {
  service: Service;
  setShowPriceVariationModal: React.Dispatch<React.SetStateAction<boolean>>;
  returnRoute?: {
    path: string;
    name: string;
  };
}

const ServiceProfile = ({
  service,
  returnRoute,
  setShowPriceVariationModal,
}: Props) => {
  const router = useRouter();
  const { bookingService } = useBookingService();
  const [, send] = useActor(bookingService);
  const { name, description, featuredImage, images, cta, price, rate, duration, requiresHairExtensions } = service;
  const initialPopUpState = {
    showing: false,
    image: null,
  };
  const [, setPopUp] = useState(initialPopUpState);

  const getPriceInfo = () => {
    const hasFixedRate = rate === "FIXED";
    return hasFixedRate ? `STARTING PRICE` : `HOURLY RATE`;
  };

  return (
    <>
      <div className={styles["profile-container"]}>
        <div>
          <MuiButton
            sx={{
              textTransform: "none",
              letterSpacing: "2px",
              color: "#4a4f4f",
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
          <h3>{name}</h3>
          <div className={styles.iconInfoContainer}>
            {requiresHairExtensions && (<div>
              <HelpOutline fontSize="large" />
              <p>Requires Hair Extensions</p>
            </div>)}
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
            Reminder that your total cost may increase.{" "}
            <Button
              variant="link"
              onClick={() => setShowPriceVariationModal(true)}
              style={{ width: "unset" }}
            >
              {"Here's why"}
            </Button>
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
        <CustomImage image={featuredImage} roundEdged />
      </div>
      {images && images.length >= 5 ? <ImageCarousel setPopUp={setPopUp} images={images} /> : null}
    </>
  );
};

export default ServiceProfile;
