import React from "react";
import { useRouter } from "next/router";
import Hero from "../../components/hero";
import Layout from "../../components/layout";
import Carousel from "../../components/carousel";
import Listing from "../../components/listing";
import { featuredPhotos } from "../../data/featured-photos";
import { serviceMenu } from "../../data/service-categories";

export default function BraidsAndTwists() {
    const router = useRouter();
    return (
        <Layout>
            <Hero
                mainText='Braids & Twists'
                image={{
                    path: require('../../images/braids-and-twists.jpg'),
                    altText: 'ifes alt text'
                }}
            />
            <section>
                <div className="services-content">
                    {serviceMenu.map((option, idx) => {
                        const { image, name, description, slug } = option;
                        return (
                            <Listing
                                key={idx}
                                image={image}
                                title={name}
                                description={description}
                                callToAction={{
                                    text: 'See Related Services',
                                    action: () => router.push(slug),
                                }}
                            />
                        );
                    })}
                </div>
            </section>
            <section className="gallery">
                <h2>Gallery</h2>
                <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
                <Carousel images={featuredPhotos} />
            </section>
        </Layout >
    );
}
