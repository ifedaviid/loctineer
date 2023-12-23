import React, { useState } from "react";
import { useActor } from "@xstate/react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "src/components/button";
import CustomImage from "src/components/custom-image";
import { Service } from "src/types";
import styles from "src/booking/service-profile.module.scss";
import ImageCarousel from "src/components/image-carousel";
import { PopupModal } from "react-calendly";

interface Props {
  service: Service;
  isBookingAppointment: boolean;
  setIsBookingAppointment: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPriceVariationModal: React.Dispatch<React.SetStateAction<boolean>>;
  returnRoute?: {
    path: string;
    name: string;
  };
}

const ServiceProfile = ({
  service,
  returnRoute,
  isBookingAppointment,
  setIsBookingAppointment,
  setShowPriceVariationModal,
}: Props) => {
  const router = useRouter();
  const { name, description, featuredImage, images, cta, price, prices } = service;
  const showImages = images && images.length >= 5;
  const initialPopUpState = {
    showing: false,
    image: null,
  };
  const [, setPopUp] = useState(initialPopUpState);

  return (
    <>
      <div className={styles["profile-container"]}>
        <div>
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
          <h3>{name}</h3>
          <p>{description}</p>
          {price && (
            <div className={styles.iconInfoContainer}>
              <div>
                <div className={styles.priceInfoContainer}>
                  <p style={{ fontSize: '2rem' }}>${price.value}</p>
                  <span>per hour</span>
                </div>
              </div>
            </div>
          )}
          {prices && (
            <>
              <ul style={{ padding: '0 0 0 1rem', alignItems: 'center', margin: 'unset' }}>
                {prices.map((price, idx) => (
                  <li key={idx} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <p>{price.name} (<small>starts at</small> ${price.value}) </p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {cta.primary && (
            <Button
              style={{ margin: '1rem 0' }}
              variant="primary"
              onClick={() => setIsBookingAppointment(true)}
            >
              Book Appointment
            </Button>
          )}
        </div>
        <CustomImage image={featuredImage} roundEdged />
      </div>
      {showImages ? <ImageCarousel setPopUp={setPopUp} images={images} /> : null}
      {typeof window !== 'undefined' && (
        <PopupModal
          open={isBookingAppointment}
          onModalClose={() => setIsBookingAppointment(false)}
          url={`https://calendly.com/loctineer/${service.calendlyEventLinkID}?hide_gdpr_banner=1`}
          pageSettings={{
            primaryColor: "a57b21",
            // hideEventTypeDetails: true,
            backgroundColor: "302f2f",
            textColor: "ffffff",
          }}
          rootElement={typeof window !== "undefined" ? document.getElementById("__next") : null}
        />
      )}
    </>
  );
};

export default ServiceProfile;
