import Head from "next/head";
import Image from "next/image";
import ShortyInfo from "../components/shortyInfo/ShortyInfo";
import ShortyRegister from "../components/shortyRegister/ShortyRegister";

export default function Home() {
  return (
    <>
      <Head>
        <title> Shorty Awards | Register </title>
        <link  rel="icon"   href="favicon.png" type="image/png" />
      </Head>
      <main className="lg:grid lg:grid-cols-page min-h-screen">
        <ShortyInfo />
        <ShortyRegister />
      </main>
    </>
  );
}
