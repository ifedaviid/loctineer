import React from 'react'
import classnames from 'classnames'
import styles from './card.module.scss';

interface Props {
    title: string;
    description?: string;
    onChange?: Function;
    isSelected: boolean;
}

const Card = ({ title, description, isSelected, onChange }: Props) => {
    return (
        <label className={styles.card}>
            <input
                type="radio"
                name="fav_language"
                onChange={onChange}
                checked={isSelected}
            />
            <div>
                <h2>{title}</h2>
                {description && <p>{description}</p>}
            </div>
        </label>
    );
}

export default Card;