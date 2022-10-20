import React from "react";
import { useRouter } from "next/router";
import Button from "../components/button";
import Layout from "../components/layout";
import styles from "./index.module.scss";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <h1 className={styles.homeHeader}>
        Liked what you saw at{" "}
        <a href="https://bougieebraids.com">Loctineer.com</a>?
      </h1>
      <div className={styles.buttonGroupContainer}>
        <Button variant="primary" size="large" onClick={() => {
          router.push('/booking')
        }}>
          Book an appointment
        </Button>

        <Button variant="secondary" size="large" onClick={() => {
          router.push('https://loctineer.com')
        }}>
          Visit Loctineer.com
        </Button>
      </div>
    </Layout>
  );
}
