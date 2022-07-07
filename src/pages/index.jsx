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
      <main className="h-auto">
        <div className="flex">
          <div className="w-1/4">
            <Sidevar />
          </div>
          <div className="w-2/4 h-screen">
            <h1 className="h-1/5">時空を超えた・・・</h1>
            <h1 className="h-1/5">業務内容</h1>
            <h2 className="h-1/5">ロゴ</h2>
            <h3 className="h-1/5">
              **はシステム構築、システム運用を主業務としています。システムエンジニアをやる気のある方を採用募集しております。東京、名古屋、神戸と全国に展開しています。フリーダイヤル:0120-111-222
            </h3>
          </div>
        </div>
        <div className="flex justify-end h-3/5 bg-gray200">
          <ReturnTopButton />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
