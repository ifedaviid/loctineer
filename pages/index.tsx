import React from "react";
import Link from "next/link";
import CustomButton from "../components/button";
import Layout from "../components/layout";
import Title from "../components/title";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout>
      <Title>
        Liked what you saw at{" "}
        <a href="https://bougieebraids.com">Loctineer.com</a>?
      </Title>
      <div className={styles.buttonGroupContainer}>
        <CustomButton variant="contained" size="large">
          <Link href="/booking">Book an appointment</Link>
        </CustomButton>
        <CustomButton variant="outlined" size="large">
          <Link href="https://loctineer.com"> Visit Loctineer.com </Link>
        </CustomButton>
      </div>
    </Layout>
  );
}
