import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidevar from "../components/Sidevar";
import Body from "../components/Body";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          株式会社**はシステム構築、システム運用を主業務としています。システムエンジニア未経験者から採用募集中です。東京、名古屋、神戸と全国に展開しています。
        </title>
      </Head>
      <Header />
      <main className="h-full">
        <div className="flex">
          <div className="w-1/6">
            <Sidevar />
          </div>
          <div className="w-5/6">
            <Body />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
