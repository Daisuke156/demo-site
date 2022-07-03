import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnTopButton from "../components/Totop";
import Sidevar from "../components/Sidevar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Demo Site</title>
      </Head>
      <Header />
      <main className="flex">
        <div className="h-screen">
          <Sidevar />
        </div>
        <div>
          時空を・・・
          <h1>業務内容</h1>
          <h2>ロゴ</h2>
          <h3>
            株式会社**はシステム構築、システム運用を主業務としています。システムエンジニアをやる気のある方を採用募集しております。東京、名古屋、神戸と全国に展開しています。フリーダイヤル:0120-111-222
          </h3>
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
