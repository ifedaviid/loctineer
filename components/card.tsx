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
    console.log("isselected:", isSelected)
    return (
        <div
            className={`${styles.card} ${isSelected ? styles.highlight : null}`}
            tabIndex={0}
            onClick={onChange}
            onKeyDown={onChange}>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

export default Card;