import React from "react";
import Layout from "../../../components/layout";
import ButtonGroupWrapper from "../../../components/button-group-wrapper";
import { dreadlocksServices } from "../../../data";
import * as strings from '../../../data/strings';
import { Service } from "../../../types/service";
import CustomImage from "../../../components/custom-image";
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
                                    <Button variant="secondary">
                                        {cta.secondary.text}
                                    </Button>
                                </Link>
                            )}
                        </ButtonGroupWrapper>
                    </div>
                    <CustomImage image={image} />
                </div>
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
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const service = dreadlocksServices.find(obj => obj.id === params.serviceId);
    return { props: { service: JSON.parse(JSON.stringify(service)) } };
}

export default DreadlocksService