import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './card.module.scss';

interface Props {
    title: string;
    description?: string;
    onChange?: Function;
    isSelected: boolean;
    image?: StaticImageData;
    imageAlt?: string;
}

const Card = ({ title, image, imageAlt, description, isSelected, onChange }: Props) => {
    const handleClick = () => onChange();
    return (
        <div
            className={`${styles.card} ${isSelected ? styles.highlight : null}`}
            tabIndex={0}
            onClick={() => handleClick()}
            onKeyDown={() => handleClick()}>
            <Image
                src={image}
                alt={imageAlt}
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
            />
            <p>{title}</p>
            {description && <p>{description}</p>}
        </div>
    );
}

export default Card;