import React, { useState } from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from "src/helpers";
import { naturalHairLengthOptions } from "data/hair-length/natural";
import SwiperSlideWrapper from "src/components/swiper-slide-wrapper";
import { SwiperSlide } from "swiper/react";
import Card from "src/components/card";
import styles from "src/booking/stages/select-hair-length.module.scss";
import useBookingNavigation from "./use-navigation-wrapper";
import { HairLength } from "src/types";
import { useBreakpoints } from "src/helpers";
import Grid from "src/components/grid";
import useConfirm from "src/booking/stages/confirm-exit";

const SelectHairLength = () => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);
  const { hairLength: savedHairLength } = state.context;
  const [hairLength, setHairLength] = useState<HairLength>(savedHairLength);
  const { mobile } = useBreakpoints();

  const [Dialog, confirmDelete] = useConfirm(
    "Are you sure?",
    "Are you sure you want to exit booking process?"
  );

  const handleExit = async () => {
    const res = await confirmDelete();
    if (res) {
      send("EXIT");
    } else {
      /* ... */
    }
  };

  const handleNext = () => {
    if (hairLength) {
      send({
        type: "SAVE_HAIR_LENGTH",
        hairLength,
      });
    }
  };

  const swipeMenu = () => (
    <SwiperSlideWrapper>
      {naturalHairLengthOptions.map((option, idx) => (
        <SwiperSlide key={idx}>
          {({ isActive }) => {
            // if (isActive) setHairLength(option);
            return (
              <Card
                image={option.image}
                isSelected={option === hairLength}
                title={option.category}
                onChange={() => setHairLength(option)}
              />
            );
          }}
        </SwiperSlide>
      ))}
    </SwiperSlideWrapper>
  );

  const gridMenu = () => (
    <Grid>
      {naturalHairLengthOptions.map((option, idx) => {
        const { category, image } = option;
        return (
          <Card
            key={idx}
            image={image}
            isSelected={option === hairLength}
            title={category}
            onChange={() => setHairLength(option)}
          />
        );
      })}
    </Grid>
  );

  const menu = mobile ? swipeMenu() : gridMenu();

  const {
    showExitButton,
    showBackButton,
    showNextButton,
    renderExitbutton,
    renderBackbutton,
    renderNextbutton
  } = useBookingNavigation({ handleExit, handleNext, disableNext: !hairLength })

  return (
    <div className={styles.selectHairLength}>
      <div className={styles.navigationButtons}>
        {showBackButton && renderBackbutton()}
        {showExitButton && renderExitbutton()}
      </div>
      <h2>How long is your natural hair?</h2>
      {menu}
      <div>
        {showNextButton && renderNextbutton()}
      </div>
      <Dialog />
    </div >
  );
};

export default SelectHairLength;
