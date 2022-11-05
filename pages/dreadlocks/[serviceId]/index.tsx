import React from "react";
import Layout from "../../../components/layout";
import Carousel from "../../../components/carousel";
import { featuredPhotos } from "../../../data/featured-photos";
import { serviceMenu } from "../../../data/service-categories";
import * as strings from '../../../data/strings';
import { Service } from "../../../types/service";

interface Props {
    service: Service
}

const DreadlocksService = ({ service }: Props) => {
    console.log("=====> service received: ", service);

    return (
        <Layout>
            <section className='gray'>
                <div className="services-content">
                    <h2 style={{ marginTop: 'unset' }}>We specialize in...</h2>
                    <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
                    details here
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
    const dreadlocksInfo = serviceMenu.find(serviceObj => serviceObj.name === strings.LOCS);
    const { services: dreadlocksServices } = dreadlocksInfo;
    const service = dreadlocksServices.find(dreadlockService => dreadlockService.id === params.serviceId);
    // will be passed to the page component as props
    return { props: { service: JSON.parse(JSON.stringify(service)) } };
}

export default DreadlocksService