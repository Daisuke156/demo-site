import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Side2 from "../components/Side2";
import Info from "../components/Info";
import { Anchor, Breadcrumbs } from "@mantine/core";

const Human = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "***の人材育成について", href: "/human" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>人材教育について</title>
      </Head>
      <div>
        <Header />
        <div className="flex">
          <div className="w-1/6">
            <Side2 />
          </div>
          <div className="w-5/6 pb-40 pt-10 mx-10">
            <div className="flex justify-end bg-red-100 h-[30px]">
              <Breadcrumbs>{items}</Breadcrumbs>
            </div>
            <div className="my-10 text-2xl text-blue-400 mx-5">
              <h1>①社会人としての一歩を踏み出すための新人教育</h1>
              <h1 className="my-[10px]">
                ②オペレータからSEにステップアップするためのSE教育
              </h1>
              <h1>③チームリーダ/管理者となるためのマネジメント教育</h1>
            </div>
            <div className="my-20">
              <Info />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Human;
