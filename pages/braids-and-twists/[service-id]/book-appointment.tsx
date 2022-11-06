import React from "react";
import Layout from "../../../components/layout";
import { getServicePaths } from '../../../static/paths';
import { getServiceProps } from '../../../static/props';
import { Service } from "../../../types/service";

interface Props {
    service: Service
}

const BookAppointment = ({ service }: Props) => {
    const { name, description } = service
    return (
        <Layout>
            <section className='gray'>
                <h2>Book a {name} Appointment</h2>
                <p>{description}</p>
            </section>
        </Layout >
    );
}

const isDreadlocks = false;
export const getStaticPaths = () => getServicePaths(isDreadlocks)
export const getStaticProps = ({ params }) => getServiceProps(params, isDreadlocks)
export default BookAppointment
