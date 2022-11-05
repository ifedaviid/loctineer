import React from "react";
import { useRouter } from "next/router";
import Hero from "../../components/hero";
import Layout from "../../components/layout";
import Carousel from "../../components/carousel";
import Listing from "../../components/listing";
import { featuredPhotos } from "../../data/featured-photos";
import { serviceMenu } from "../../data/service-categories";
import * as strings from '../../data/strings';

export default function BraidsAndTwists() {
    const router = useRouter();
    const braidsAndTwistsInfo = serviceMenu.find(service => service.name === strings.BRAIDS_AND_TWISTS)
    const { services } = braidsAndTwistsInfo;
    return (
        <Layout>
            <Hero
                topText="Services"
                mainText='Braids & Twists'
                image={{
                    path: require('../../images/braids-and-twists.jpg'),
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
