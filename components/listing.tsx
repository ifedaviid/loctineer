import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from "./button";
import styles from './listing.module.scss';
import { AppImage } from '../types/image';

interface Props {
    image: AppImage;
    title: string;
    description: string;
    cta: CallToAction;
}
const Listing = ({ image, title, description, cta }: Props) => {
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
                {cta.primary && (
                    <Link href={cta.primary.href}>
                        <Button variant="primary">
                            {cta.primary.text}
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Listing