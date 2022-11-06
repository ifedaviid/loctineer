import React from "react";
import Layout from "../../components/layout";
import Listing from "../../components/listing";
import { serviceTypes } from "../../data";
import * as strings from '../../data/strings';

export default function Dreadlocks() {
    const dreadlocksInfo = serviceTypes.find(service => service.name === strings.LOCS)
    const { services } = dreadlocksInfo;
    return (
        <Layout>
            <section className='gray'>
                <h2>{strings.LOCS} Services</h2>
                <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
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
        </Layout >
    );
}
