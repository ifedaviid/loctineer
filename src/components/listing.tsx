import React from "react";
import Image from "next/image";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import Button from "src/components/button";
import styles from "src/components/listing.module.scss";
import { Info } from "@mui/icons-material";
import { Service } from "src/types";

interface Props {
  service: Service;
}

const Listing = ({ service }: Props) => {
  const { name, thumbnail, description, cta, requiresHairExtensions } = service

  return (
    <div className={styles["listing"]}>
      <div>
        <Image
          src={thumbnail.path}
          alt={thumbnail.altText}
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div>
        {requiresHairExtensions && (
          <Chip
            label='Requires hair extensions'
            variant="outlined"
            size="small"
            icon={<Info style={{ color: "white" }} />}
            style={{ fontFamily: "inherit", color: "white", background: "#626262" }}
          />
        )}
        <h3>{name}</h3>
        <p>{description}</p>
        {cta.primary && (
          <Link href={cta.primary.href}>
            <Button variant="primary">{cta.primary.text}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Listing;
