import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidevar from "../components/Sidevar";
import { Carousel } from "@mantine/carousel";

const Home = () => {
  return (
    <>
      <Head>
        <title>Topページ</title>
      </Head>
      <Header />
      <main className="h-auto">
        <div className="flex">
          <div className="w-1/6">
            <Sidevar />
          </div>
          <div className="w-5/6">
            <div className="h-3/5 bg-pink-200">
              業務内容
              <Carousel
                sx={{ maxWidth: 320 }}
                mx="auto"
                withIndicators
                height={200}
              >
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
              </Carousel>
            </div>
            <h2 className="h-2/5 bg-red-50">
              システム構築、システム運用を主業務としています。
              <br />
              システムエンジニアをやる気のある方を採用募集しております。東京、名古屋、神戸と全国に展開しています。
              <br />
              フリーダイヤル:0120-111-222
            </h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
