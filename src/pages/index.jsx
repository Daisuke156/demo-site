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
      <main className="h-full">
        <div className="flex">
          <div className="w-1/6">
            <Sidevar />
          </div>
          <div className="w-5/6">
            <div className="h-[480px] bg-red-50">
              <div className="text-4xl py-10 px-10 font-bold">業務内容</div>
              {/* <div className="my-10 bg-blue-50">
                <Carousel
                  slideSize="70%"
                  height={300}
                  slideGap="md"
                  loop
                  withIndicators
                >
                  <Carousel.Slide>1</Carousel.Slide>
                  <Carousel.Slide>2</Carousel.Slide>
                  <Carousel.Slide>3</Carousel.Slide>
                  <Carousel.Slide>4</Carousel.Slide>
                  <Carousel.Slide>5</Carousel.Slide>
                </Carousel>
              </div> */}
            </div>
            <div className="px-10 h-[400px] bg-red-50">
              システム構築、運用を主業務としています。
              <br />
              システムエンジニアをやる気のある方を採用募集しております。東京、名古屋、神戸と全国に展開しています。
              <br />
              フリーダイヤル:0120-111-222
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
