import React, { useState } from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from "../../hooks/useBookingService";
import { SwiperSlide } from "swiper/react";
import { extensionLengthOptions } from "../../data/extension-length-options";
import SwiperSlideWrapper from "../swiper-slide-wrapper";
import ButtonGroupWrapper from "../button-group-wrapper";
import Button from "../button";
import Card from "../card";
import { ExtensionLength } from "../../context/booking-machine";

const SelectExtensionLength = () => {
  const [extensionLength, setExtensionLength] = useState<ExtensionLength>(null);
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);
  const { service } = state.context;

  return (
    <div style={{ width: "100%" }}>
      <h2>{`How long do you want your ${service.name} extensions to be?`}</h2>
      <SwiperSlideWrapper onSwiper={setExtensionLength}>
        {extensionLengthOptions.map((option, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => {
              if (isActive) setExtensionLength(option);
              return (
                <Card
                  image={option.image}
                  isSelected={isActive}
                  title={option.category}
                />
              );
            }}
          </SwiperSlide>
        ))}
      </SwiperSlideWrapper>
      <ButtonGroupWrapper>
        <Button
          variant="primary"
          onClick={() => {
            console.log("ext-length: ", extensionLength);
            send({
              type: "SAVE_EXTENSION_LENGTH",
              extensionLength: extensionLength,
            });
          }}
        >
          Next
        </Button>
        <Button
          variant="secondary"
          size="large"
          onClick={() => {
            send("EXIT");
            // router.push('/')
          }}
        >
          X
        </Button>
      </ButtonGroupWrapper>
    </div>
  );
};

export default SelectExtensionLength;
