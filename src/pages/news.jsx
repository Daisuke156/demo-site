import Head from "next/head";
import Header from "../components/Header";
import Side2 from "../components/Side2";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { Anchor, Breadcrumbs } from "@mantine/core";

const ITEMS = [
  {
    date: "2022.4.1",
    title: "プライバシーマークを更新致しました",
    text: "弊社は、2022年1月26日付けで、プライバシーマークの認証を更新いたしました。",
  },
  {
    date: "2019.8.1",
    title: "**事務所開設致しました",
    text: "事務所開設いたしました。",
  },
];
const News = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "最新情報", href: "/news" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <>
      <Head>
        <title>最新情報</title>
      </Head>
      <Header />
      <div className="flex">
        <div className="w-1/6">
          <Side2 />
        </div>
        <div className="w-5/6 pb-40 pt-10">
          <div className="flex mx-10 justify-end bg-red-100 h-[30px]">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="my-20">
            {ITEMS.map((item) => {
              return (
                <div className="border-2 border-red-50 text-2xl mx-10 my-10">
                  <div className="bg-red-700 text-white text-sm">
                    <div className="mx-5 my-[3px] font-bold">{item.date}</div>
                    <div className="mx-5 my-[3px]">{item.title}</div>
                  </div>
                  <div className="bg-red-100">
                    <div className="mx-5 text-sm">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mx-10">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default News;
