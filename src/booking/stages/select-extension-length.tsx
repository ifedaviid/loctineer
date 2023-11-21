import React, { useState } from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from "src/helpers";
import { SwiperSlide } from "swiper/react";
import { extensionLengthOptions } from "data/hair-length/extension";
import SwiperSlideWrapper from "src/components/swiper-slide-wrapper";
import Card from "src/components/card";
import { ExtensionLength } from "src/types";
import { useBreakpoints } from "src/helpers";
import Grid from "src/components/grid";
import useConfirm from "src/booking/stages/confirm-exit";
import styles from "src/booking/stages/select-extension-length.module.scss";
import useBookingNavigation from "./use-navigation-wrapper";

const SelectExtensionLength = () => {
  const { bookingService } = useBookingService();
  const [Dialog, confirmDelete] = useConfirm(
    "Are you sure?",
    "Are you sure you want to exit booking process?"
  );
  const [state, send] = useActor(bookingService);
  const { service, extensionLength: savedChoice } = state.context;
  const { mobile } = useBreakpoints();
  const [extensionLength, setExtensionLength] =
    useState<ExtensionLength>(savedChoice);

  const handleExit = async () => {
    const res = await confirmDelete();
    if (res) {
      send("EXIT");
    } else {
      /* ... */
    }
  };

  const handleNext = () => {
    if (extensionLength)
      send({
        type: "SAVE_EXTENSION_LENGTH",
        extensionLength: extensionLength,
      });
  };

  const {
    showExitButton,
    showBackButton,
    showNextButton,
    renderExitbutton,
    renderBackbutton,
    renderNextbutton
  } = useBookingNavigation({ handleExit, handleNext, disableNext: !extensionLength })

  const swipeMenu = () => (
    <SwiperSlideWrapper>
      {extensionLengthOptions.map((option, idx) => (
        <SwiperSlide key={idx}>
          {({ isActive }) => {
            // if (isActive) setExtensionLength(option);
            return (
              <Card
                image={option.image}
                isSelected={option === extensionLength}
                title={option.category}
                onChange={() => setExtensionLength(option)}
              />
            );
          }}
        </SwiperSlide>
      ))}
    </SwiperSlideWrapper>
  );

  const gridMenu = () => (
    <Grid>
      {extensionLengthOptions.map((option, idx) => {
        const { category, image } = option;
        return (
          <Card
            key={idx}
            image={image}
            isSelected={option === extensionLength}
            title={category}
            onChange={() => setExtensionLength(option)}
          />
        );
      })}
    </Grid>
  );

  const menu = mobile ? swipeMenu() : gridMenu();

  return (
    <div className={styles.selectExtensionLength}>
      <div className={styles.navigationButtons}>
        {showBackButton && renderBackbutton()}
        {showExitButton && renderExitbutton()}
      </div>
      <h2>{`How long do you want your extensions to be?`}</h2>
      {menu}
      <div>
        {showNextButton && renderNextbutton()}
      </div>
      <Dialog />
    </div >
  );
};

export default SelectExtensionLength;
