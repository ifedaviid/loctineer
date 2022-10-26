import React from 'react';
import Image from 'next/image';
import Button from "../components/button";
import styles from './hero.module.scss';

interface Props {
    topText?: string;
    mainText?: string;
    bottomText?: string;
    image?: AppImage;
    callToAction?: Function;
}

const Hero = ({ topText, mainText, bottomText, image, callToAction }: Props) => {
    return (
        <header className={styles['heroImage']}>
            <div>
                <Image
                    src={image.path}
                    alt={image.altText}
                    width="100%"
                    height="100%"
                    layout='fill'
                />
            </div>
            <section>
                <p>{topText}</p>
                <h1>{mainText}</h1>
                <p>{bottomText}</p>
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