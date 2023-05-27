import React from "react";
import Image from "next/image";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import Button from "src/components/button";
import styles from "src/components/listing.module.scss";
import { Service } from "src/types/service";
import { ExtensionUsage } from "src/types/extension-usage";

interface Props {
  service: Service;
}

const Listing = ({ service }: Props) => {
  const { name, image, description, cta, extensionUsage } = service;

  let label = null;
  switch (extensionUsage) {
    case ExtensionUsage.NOT_OFFERED:
      label = "Without hair extensions";
      break;

    case ExtensionUsage.POSSIBLE:
      label = "Can use hair extensions";
      break;

    case ExtensionUsage.REQUIRED:
      label = "Must use hair extensions";
      break;

    default:
      break;
  }

  return (
    <div className={styles["listing"]}>
      <div>
        <Image
          src={image.path}
          alt={image.altText}
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div>
        {label && (
          <Chip
            label={label}
            variant="outlined"
            size="small"
            style={{ fontFamily: "inherit", color: "white" }}
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
