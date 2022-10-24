import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './card.module.scss';

interface Props {
    title: string;
    description?: string;
    onChange: Function;
    category?: string;
    isSelected?: boolean;
    image?: StaticImageData;
    imageAlt?: string;
}

const Card = ({ title, image, imageAlt, description, category, isSelected, onChange }: Props) => {
    const handleClick = () => onChange();
    return (
        <div
            className={`${styles.card} ${isSelected ? styles.highlight : null}`}
            tabIndex={0}
            onClick={() => handleClick()}
            onKeyDown={() => handleClick()}>
            {image &&
                <Image
                    src={image}
                    alt={imageAlt}
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    placeholder="blur" // Optional blur-up while loading
                />
            }
            <div className={styles.cardDetails}>
                {category && <small>{category}</small>}
                <h4>{title}</h4>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}

export default Card;