import React from "react";
import Head from "next/head";
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
      <main className="">
        <div className=" h-screen">
          <div className="flex justify-center">
            <ReturnTopButton />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
