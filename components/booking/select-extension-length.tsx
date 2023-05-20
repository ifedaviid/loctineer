import React, { useState } from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from "../../components/hooks/useBookingService";
import { Swiper, SwiperSlide } from "swiper/react";
import { extensionLengthOptions } from "../../data/hair-length/extension";
import SwiperSlideWrapper from "../swiper-slide-wrapper";
import ButtonGroupWrapper from "../button-group-wrapper";
import Button from "../button";
import Card from "../card";
import { ExtensionLength } from "../../context/booking-machine";
import { useBreakpoints } from "../../components/hooks/useBreakpoints";
import Grid from "../grid";
import useConfirm from "./confirm-exit";

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
    <div style={{ width: "100%" }}>
      <h2>{`How long do you want your ${service.name} extensions to be?`}</h2>
      {menu}
      <ButtonGroupWrapper>
        <Button
          variant="primary"
          onClick={handleNext}
          disabled={!extensionLength}
        >
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

export default SelectExtensionLength;
