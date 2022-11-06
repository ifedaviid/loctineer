import React from "react";
import Layout from "../../../components/layout";
import Carousel from "../../../components/carousel";
import ButtonGroupWrapper from "../../../components/button-group-wrapper";
import { featuredPhotos } from "../../../data/featured-photos";
import { serviceTypes } from "../../../data";
import * as strings from '../../../data/strings';
import { Service } from "../../../types/service";
import Image from "next/image";
import Button from "../../../components/button";
import Link from "next/link";

interface Props {
    service: Service
}

const DreadlocksService = ({ service }: Props) => {
    const { name, description, image, cta } = service;

    return (
        <Layout>
            <section className='gray'>
                <div className="services-content">
                    <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <ButtonGroupWrapper>
                            {cta.primary && (
                                <Link href={cta.primary.href}>
                                    <Button variant="primary">
                                        {cta.primary.text}
                                    </Button>
                                </Link>
                            )}
                            {cta.secondary && (
                                <Link href={cta.secondary.href}>
                                    <Button variant="secondary"                  >
                                        {cta.secondary.text}
                                    </Button>
                                </Link>
                            )}
                        </ButtonGroupWrapper>
                    </div>
                    <div>
                        <Image
                            src={image.path}
                            alt={image.altText}
                            placeholder="blur"
                        />
                    </div>
                </div>
            </section>
            <section className="dark">
                <h2>Gallery</h2>
                <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
                <Carousel images={featuredPhotos} />
            </section>
        </Layout >
    )
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { serviceId: strings.LOC_REPAIR_ID } },
            { params: { serviceId: strings.LOC_RETWIST_ID } },
            { params: { serviceId: strings.LOC_STYLING_ID } },
            { params: { serviceId: strings.SISTER_LOCS_ID } },
            { params: { serviceId: strings.NATURAL_INSTANT_DREADLOCKS_ID } },
            { params: { serviceId: strings.TWO_STRAND_STARTER_LOCS_ID } },
        ],
        fallback: false, // can also be true or 'blocking'
    }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
    const dreadlocksInfo = serviceTypes.find(serviceObj => serviceObj.name === strings.LOCS);
    const { services: dreadlocksServices } = dreadlocksInfo;
    const service = dreadlocksServices.find(dreadlockService => dreadlockService.id === params.serviceId);
    // will be passed to the page component as props
    return { props: { service: JSON.parse(JSON.stringify(service)) } };
}

export default DreadlocksService