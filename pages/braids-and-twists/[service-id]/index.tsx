import React from "react";
import Link from "next/link";
import Layout from "../../../components/layout";
import ButtonGroupWrapper from "../../../components/button-group-wrapper";
import { Service } from "../../../types/service";
import CustomImage from "../../../components/custom-image";
import Button from "../../../components/button";
import { getServicePaths } from '../../../static/paths';
import { getServiceProps } from '../../../static/props';

interface Props {
    service: Service
}

const ServiceProfile = ({ service }: Props) => {
    const { name, description, image, cta } = service

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
                                        Book Appointment
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

const isDreadlocks = false;
export const getStaticPaths = () => getServicePaths(isDreadlocks)
export const getStaticProps = ({ params }) => getServiceProps(params, isDreadlocks)
export default ServiceProfile