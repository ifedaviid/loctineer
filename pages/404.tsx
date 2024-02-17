import Link from "next/link";
import Image from "next/legacy/image";
import Button from "components/button";
import Layout from "components/layout";

export default function ErrorPage() {
  return (
    <Layout>
      <section style={{ padding: '5rem 0' }}>
        <Image src="/images/404.png" alt="404" width={150} height={150} />
        <h1 style={{ marginBottom: 'unset' }}>We don&apos;t have this page</h1>
        <br />
        <p style={{ marginTop: 'unset' }}>Your URL is probably invalid. Make sure you have the correct one.</p>
        <Link href="/" legacyBehavior>
          <Button variant="primary">Return home</Button>
        </Link>
      </section>
    </Layout >
  );
}
