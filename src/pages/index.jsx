import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidevar from "../components/Sidevar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Topページ</title>
      </Head>
      <Header />
      <main className="h-full bg-red-100">
        <div className="flex">
          <div className="w-1/6">
            <Sidevar />
          </div>
          <div className="w-5/6">
            <div className="bg-red-100">
              <div className="text-4xl py-10 px-10 font-bold">業務内容</div>
              <div className="px-10 text-xl">
                システム構築、運用を主業務としています。
                <br />
                システムエンジニアをやる気のある方を採用募集しております。東京、名古屋、大阪と全国に展開しています。
                <br />
                フリーダイヤル:0120-111-222
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
