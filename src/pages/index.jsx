import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnTopButton from "../components/Totop";

const Home = () => {
  return (
    <>
      <Head>
        <title>Demo Site</title>
      </Head>
      <Header />
      <main className=" bg-blue-200">
        <div className=" h-screen">
          <h1 className="text-4xl text-red-600 py-10 px-20">ニュース</h1>
          <h2 className="texl-xl text-pink-600 py-5 px-20 border-red-200 border-5">
            <Link href="../../news">
              <a>ニュース一覧</a>
            </Link>
          </h2>
        </div>
        <div className="flex justify-center">
          <ReturnTopButton />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
