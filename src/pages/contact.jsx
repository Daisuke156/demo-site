import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Breadcrumbs, Anchor } from "@mantine/core";
import Side2 from "../components/Side2";

const Contact = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "お問い合わせ方法", href: "/contact" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>お問い合わせについて</title>
      </Head>
      <div>
        <Header />
        <div className="flex h-full">
          <div className="w-1/6">
            <Side2 />
          </div>
          <div className="mx-20 my-10 w-5/6">
            <div className="flex justify-end bg-red-100 h-[30px]">
              <Breadcrumbs>{items}</Breadcrumbs>
            </div>
            <div className="text-2xl my-5 mx-10">お電話でのお問い合わせ</div>
            <div className="mx-10 mt-10 font-bold text-xl">株式会社**</div>
            <div className="flex">
              <div className="mx-10 my-5">東京事務所(本部)</div>
              <div className="my-5">〒105-1111 東京都港区***</div>
            </div>
            <div className="flex">
              <div className="mx-10 py-[5px] my-5 text-red-600 text-2xl">
                電話受付時間:平日9:00〜17:00
              </div>
              <div className="mx-10 my-5 text-red-600 text-4xl">
                TEL:0120-***-***(担当:**)
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
