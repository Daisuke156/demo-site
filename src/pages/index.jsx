import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
          <div className="w-1/6">
            <Sidevar />
          </div>
          <div className="w-5/6 h-screen">
            <h1 className="h-1/5">時空を超えた・・・</h1>
            <h1 className="h-1/5">業務内容</h1>
            <h2 className="h-1/5">ロゴ</h2>
            <h3 className="h-1/5">
              **はシステム構築、システム運用を主業務としています。
              <br />
              システムエンジニアをやる気のある方を採用募集しております。東京、名古屋、神戸と全国に展開しています。
              <br />
              フリーダイヤル:0120-111-222
            </h3>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
