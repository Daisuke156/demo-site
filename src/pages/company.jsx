import { AspectRatio } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/Sidevar";

const ITEMS = [
  {
    href: "/",
    title: "**株式会社",
  },
  {
    href: "/",
    title: "株式会社**",
  },
  {
    href: "/",
    title: "**株式会社",
  },
];

const Company = () => {
  return (
    <>
      <Head>
        <title>会社概要</title>
      </Head>
      <Header />
      <div className="flex bg-lime-200">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 px-20">
          <div className="text-4xl my-10 font-bold">会社概要</div>
          <div>
            <div className="flex justify-between">
              <div>
                <div className="text-2xl">
                  <h1>会社名:株式会社**</h1>
                </div>
                <div className="my-10">
                  <h1>設立:1987年6月</h1>
                </div>
                <div className="my-10">
                  <h1>営業種目</h1>
                </div>
                <div className="my-10">
                  <h1>年商:1億円</h1>
                </div>
                <div className="my-10">
                  <h1>資本金:1000万円</h1>
                </div>
              </div>
              <div>
                <h1>所在地:東京都港区***</h1>
                <div className="h-[300px] w-[300px]">
                  <AspectRatio ratio={100 / 100}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
                      title="Google map"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
            <div>
              <h1>代表取締役:</h1>
            </div>
            <div className="my-10">
              <h1>決算期:3月</h1>
            </div>
            <div className="my-10">
              <h1>従業員数:</h1>
            </div>
            <div className="my-10">
              <h1>取引銀行</h1>
              <h2 className="mx-5 my-5 text-sm">**銀行</h2>
              <h2 className="mx-5 my-5 text-sm">**銀行</h2>
              <h2 className="mx-5 my-5 text-sm">**銀行</h2>
              <h2 className="mx-5 my-5 text-sm">**銀行</h2>
            </div>
            <div className="mt-10 mb-40">
              <h1>主な取引先</h1>
              <div className="px-5">
                {ITEMS.map((item) => {
                  return (
                    <div className="text-sm my-5 text-blue-600 w-[500px] hover:underline hover:text-red-600">
                      <a href={item.href}>
                        <li>{item.title}</li>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Company;
