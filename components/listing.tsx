import React from 'react';
import Image from 'next/image';
import Button from "./button";
import styles from './listing.module.scss';
import { AppImage } from '../types/image';

interface Props {
    image: AppImage;
    title: string;
    description: string;
    callToAction: CallToAction;
}
const Listing = ({ image, title, description, callToAction }: Props) => {
    return (
        <div className={styles["listing"]}>
            <div>
                <Image
                    src={image.path}
                    alt={image.altText}
                    placeholder="blur"
                />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Button variant="primary" onClick={callToAction.action}>
                    {callToAction.text}
                </Button>
            </div>
        </div>
    )
}

export default Listing