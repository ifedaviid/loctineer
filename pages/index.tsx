import React from "react";
import Link from "next/link";
import Button from "../components/button";
import Layout from "../components/layout";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.homeHeader}>
        Liked what you saw at{" "}
        <a href="https://bougieebraids.com">Loctineer.com</a>?
      </h1>
      <div className={styles.buttonGroupContainer}>
        <Button variant="primary">
          <Link href="/booking">Book an appointment</Link>
        </Button>
        <Button variant="secondary">
          <Link href="https://loctineer.com"> Visit Loctineer.com </Link>
        </Button>
      </div>
    </Layout>
  );
}
