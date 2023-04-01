import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";
import Layout from "../components/layout";

export default function FourOhFour() {
  return (
    <Layout>
      <section style={{ background: "lightgray" }}>
        <Image src="/images/404.png" alt="404" width={150} height={150} />
        <h1>We don&apos;t have this page</h1>
        <br />
        <p>Your URL is probably invalid. Make sure you have the correct one.</p>
        <Link href="/">
          <Button variant="primary">Return home</Button>
        </Link>
      </section>
    </Layout>
  );
}
