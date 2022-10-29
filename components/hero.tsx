import React from 'react';
import Image from 'next/image';
import Button from "../components/button";
import styles from './hero.module.scss';
import { AppImage } from '../types/image';

interface Props {
    topText?: string;
    mainText: string;
    bottomText?: string;
    image?: AppImage;
    callToAction?: Function;
}

const Hero = ({ topText, mainText, bottomText, image, callToAction }: Props) => {
    return (
        <header className={styles['heroImage']}>
            {image &&
                <div>
                    <Image
                        src={image.path}
                        alt={image.altText}
                        layout='fill'
                    />
                </div>
            }
            <section style={image ? null : { opacity: 'unset' }}>
                {topText && <p>{topText}</p>}
                <h1>{mainText}</h1>
                {bottomText && <p>{bottomText}</p>}
                {callToAction &&
                    <Button
                        variant="primary"
                        size="large"
                        onClick={callToAction || null}
                    >
                        Book Online
                    </Button>
                }
            </section>
        </header>
    )
}

export default Hero;