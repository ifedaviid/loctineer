import React from "react";
import { useRouter } from "next/router";
import Hero from "../../components/hero";
import Layout from "../../components/layout";
import Carousel from "../../components/carousel";
import Listing from "../../components/listing";
import { featuredPhotos } from "../../data/featured-photos";
import { serviceMenu } from "../../data/service-categories";
import * as strings from '../../data/strings';

export default function Dreadlocks() {
    const router = useRouter();
    const dreadlocksInfo = serviceMenu.find(service => service.name === strings.LOCS)
    const { services } = dreadlocksInfo;
    return (
        <Layout>
            <Hero
                topText="Services"
                mainText='Dreadlocks'
                image={{
                    path: require('../../images/dreadlocks.jpg'),
                    altText: 'ifes alt text'
                }}
            />
            <section>
                <div className="services-content">
                    {services.map((option, idx) => {
                        const { image, name, description, cta } = option;
                        return (
                            <Listing
                                key={idx}
                                image={image}
                                title={name}
                                description={description}
                                cta={cta}
                            />
                        );
                    })}
                </div>
            </section>
            <section className="dark">
                <h2>Gallery</h2>
                <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
                <Carousel images={featuredPhotos} />
            </section>
        </Layout >
    );
}
