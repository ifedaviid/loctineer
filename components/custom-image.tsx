import React from 'react';
import Image from 'next/image';
import { AppImage } from '../types/image';
import styles from './custom-image.module.scss';

interface Props {
    image: AppImage
}

const CustomImage = ({ image }: Props) => {
    const { path, altText } = image;
    return (
        <div className={styles['custom-image']}>
            <Image
                src={path}
                alt={altText}
                placeholder='blur'
            />
        </div>
    )
}

export default CustomImage;