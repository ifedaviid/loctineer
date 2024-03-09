import React, { useState } from "react";
import { useRouter } from "next/router";
import MuiButton from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "components/button";
import CustomImage from "components/custom-image";
import Price from "components/price";
import { Service } from "types";
import styles from "./service.module.scss";
import ImageCarousel from "components/image-carousel";
import { PopupModal } from "react-calendly";
import PriceList from "components/price-list";
import { getPriceSuffix, useScreenSizeDetector } from "helpers";

interface Props {
  service: Service;
  returnRoute?: {
    path: string;
    name: string;
  };
}
const PRICE_LIST_MAX = 5;

const Service = ({
  service,
  returnRoute
}: Props) => {
  const router = useRouter();
  const [showPriceListModal, setShowPriceListModal] = useState(false)
  const { isMobile } = useScreenSizeDetector()
  const { name, description, featuredImage, images, cta, price, prices, calendlyEventURL } = service;
  const showImages = images && images.length >= 5;
  const initialPopUpState = {
    showing: false,
    image: null,
  };
  const [, setPopUp] = useState(initialPopUpState);
  const [isBookingAppointment, setIsBookingAppointment] = useState(false);
  const showPrices = () => {
    if (price) return <Price price={price} />;
    if (prices?.length < PRICE_LIST_MAX) {
      return (
        <ul style={{ padding: '0 0 0 1rem', alignItems: 'center', margin: 'unset' }}>
          {prices.map((price, idx) => (
            <li key={idx} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <p>{price.name} (${price.value}{getPriceSuffix(price.type)})</p>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  }
  const showPriceListButton = () => {
    if (prices?.length >= PRICE_LIST_MAX || (price && prices)) {
      return (
        <Button variant="secondary" onClick={() => setShowPriceListModal(true)}>
          See Price List
        </Button>
      );
    }
  }

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
          <h1>{name}</h1>
          <p>{description}</p>
          <div className={styles.priceInfoContainer}>
            {showPrices()}
          </div>
          <div className={styles.buttonGroup}>
            {cta.primary && (
              <Button
                variant="primary"
                onClick={calendlyEventURL && (() => setIsBookingAppointment(true))}
              >
                Book Appointment
              </Button>
            )}
            {showPriceListButton()}
          </div>
        </div>
        <CustomImage image={featuredImage} height={isMobile ? 400 : 650} width={1000} />
      </div>
      {showImages ? <ImageCarousel setPopUp={setPopUp} images={images} /> : null}
      {
        typeof window !== 'undefined' &&
        <PopupModal
          open={isBookingAppointment}
          onModalClose={() => setIsBookingAppointment(false)}
          url={calendlyEventURL}
          pageSettings={{
            primaryColor: "a57b21",
            // hideEventTypeDetails: true,
            backgroundColor: "282826",
            textColor: "ffffff",
          }}
          rootElement={typeof window !== "undefined" ? document.getElementById("__next") : null}
        />

      }
      {
        (prices && showPriceListModal) &&
        <PriceList open={showPriceListModal} onClose={setShowPriceListModal} prices={prices} serviceName={name} />
      }
    </section>
  );
};

export default Service;
