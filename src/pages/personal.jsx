import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";
import { AspectRatio, Image } from "@mantine/core";
import Link from "next/link";

const Personal = () => {
  return (
    <>
      <Head>
        <title>個人情報保護について</title>
      </Head>
      <Header />
      <div className="h-full flex bg-lime-200">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 py-10 px-20">
          <div className="mb-10 text-4xl font-bold">個人情報保護について</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Personal;
