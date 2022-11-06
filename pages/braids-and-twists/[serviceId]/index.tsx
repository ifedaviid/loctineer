import React from "react";
import Layout from "../../../components/layout";
import ButtonGroupWrapper from "../../../components/button-group-wrapper";
import { braidsAndTwistsServices } from "../../../data";
import * as strings from '../../../data/strings';
import { Service } from "../../../types/service";
import CustomImage from "../../../components/custom-image";
import Button from "../../../components/button";
import Link from "next/link";

interface Props {
    service: Service
}

const BraidsAndTwistsService = ({ service }: Props) => {
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
            { params: { serviceId: strings.FAUX_LOCS_ID } },
            { params: { serviceId: strings.SOFT_LOCS_ID } },
            { params: { serviceId: strings.BUTTERFLY_DISTRESSED_LOCS_ID } },
            { params: { serviceId: strings.NATURAL_BRAIDS_AND_TWISTS_ID } },
            { params: { serviceId: strings.BOX_BRAIDS_AND_TWISTS_ID } },
            { params: { serviceId: strings.KINKY_PASSION_TWISTS_ID } },
            { params: { serviceId: strings.KNOTLESS_BRAIDS_ID } },
        ],
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const service = braidsAndTwistsServices.find(obj => obj.id === params.serviceId);
    return { props: { service: JSON.parse(JSON.stringify(service)) } };
}

export default BraidsAndTwistsService