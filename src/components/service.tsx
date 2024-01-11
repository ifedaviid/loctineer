import React, { useState } from "react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "src/components/button";
import CustomImage from "src/components/custom-image";
import { Service } from "src/types";
import styles from "./service.module.scss";
import ImageCarousel from "src/components/image-carousel";
import { PopupModal } from "react-calendly";

interface Props {
  service: Service;
  returnRoute?: {
    path: string;
    name: string;
  };
}

const Service = ({
  service,
  returnRoute
}: Props) => {
  const router = useRouter();
  const { name, description, featuredImage, images, cta, price, prices } = service;
  const showImages = images && images.length >= 5;
  const initialPopUpState = {
    showing: false,
    image: null,
  };
  const [, setPopUp] = useState(initialPopUpState);
  const [isBookingAppointment, setIsBookingAppointment] = useState(false);

  return (
    <section>
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
            <div className={styles.priceInfoContainer}>
              <p>${price.value}</p>
              <span>per hour</span>
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
          <div className={styles.buttonGroup}>
            {cta.primary && (
              <Button
                variant="primary"
                onClick={() => setIsBookingAppointment(true)}
              >
                Book Appointment
              </Button>
            )}
            {prices && (
              <Button variant="secondary">
                See Price List
              </Button>
            )}
          </div>
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
    </section>
  );
};

export default Service;
