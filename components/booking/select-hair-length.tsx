import React, { useState } from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from "../../context/useBookingService";
import { naturalHairLengthOptions } from "../../data/hair-length-options";
import SwiperSlideWrapper from "../swiper-slide-wrapper";
import { SwiperSlide } from "swiper/react";
import Card from "../card";
import ButtonGroupWrapper from "../button-group-wrapper";
import Button from "../button";
import { HairLength } from "../../context/booking-machine";

const SelectHairLength = () => {
  const [hairLength, setHairLength] = useState<HairLength>(null);
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);
  return (
    <div style={{ width: "100%" }}>
      <h2>How long is your natural hair?</h2>
      <SwiperSlideWrapper>
        {naturalHairLengthOptions.map((option, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => {
              if (isActive) setHairLength(option);
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
          onClick={() =>
            send({
              type: "SAVE_HAIR_LENGTH",
              hairLength,
            })
          }
        >
          Next
        </Button>
        <Button variant="secondary" size="large" onClick={() => send("EXIT")}>
          X
        </Button>
      </ButtonGroupWrapper>
    </div>
  );
};

export default SelectHairLength;
