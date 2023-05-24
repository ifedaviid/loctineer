import React, { useState } from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from "src/booking/useBookingService";
import { naturalHairLengthOptions } from "data/hair-length/natural";
import SwiperSlideWrapper from "src/components/swiper-slide-wrapper";
import { SwiperSlide } from "swiper/react";
import Card from "src/components/card";
import ButtonGroupWrapper from "src/components/button-group-wrapper";
import Button from "src/components/button";
import { HairLength } from "src/booking/booking-machine";
import { useBreakpoints } from "src/helpers";
import Grid from "src/components/grid";
import useConfirm from "src/booking/confirm-exit";

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

  return (
    <div style={{ width: "100%" }}>
      <h2>How long is your natural hair?</h2>
      {menu}
      <ButtonGroupWrapper>
        <Button variant="primary" onClick={handleNext} disabled={!hairLength}>
          Next
        </Button>
        <Button variant="secondary" size="large" onClick={handleExit}>
          X
        </Button>
      </ButtonGroupWrapper>
      <Dialog />
    </div>
  );
};

export default SelectHairLength;
