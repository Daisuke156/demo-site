import { Anchor, Breadcrumbs, Card, Image } from "@mantine/core";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Side2 from "../components/Side2";
import Info from "../components/Info";

const Service = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "業務内容", href: "/service" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>業務内容</title>
      </Head>
      <Header />
      <div className="flex h-full pb-40">
        <div className="w-1/6">
          <Side2 />
        </div>
        <div className="w-5/6 pb-40 pt-10 mx-10">
          <div className="flex justify-end bg-red-100 h-[30px]">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="flex mt-10">
            <div className="text-red-700 text-2xl">ITアウトソーシング</div>
            <div className="text-sm py-[5px]">
              (IT標準スキル標準的における、ITサービスマネジメント領域)
            </div>
          </div>
          <div>に特化したサービスを展開しています。</div>
          <div className="my-80">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Service;
