import React from 'react'
import CustomImage from './custom-image';
import styles from './card.module.scss';
import { AppImage } from '../types/image';

interface Props {
    title?: string;
    description?: string;
    onChange?: Function;
    category?: string;
    isSelected?: boolean;
    image?: AppImage;
}

const Card = ({
    title,
    description,
    onChange,
    category,
    isSelected,
    image
}: Props) => {

    return (
        <div
            className={`${styles.card} ${isSelected ? styles.active : styles.inactive}`}
            // tabIndex={0}
            onClick={onChange ? () => onChange() : null}
        // onKeyDown={onChange ? () => onChange() : null}
        >
            {image && <CustomImage image={image} />}
            <div className={styles.cardDetails}>
                {category && <small>{category}</small>}
                <h4>{title}</h4>
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}

export default Card;