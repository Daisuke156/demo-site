import { Breadcrumbs, Anchor } from "@mantine/core";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Side2 from "../components/Side2";
import Workstyle from "../components/Workstyle";

const Recruit = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "採用情報", href: "/recruit" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>採用情報</title>
      </Head>
      <Header />
      <div className="flex h-full">
        <div className="w-1/6">
          <Side2 />
        </div>
        <div className="w-5/6 px-20 py-10">
          <div className="flex justify-end bg-red-100 h-[30px]">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="flex my-10">
            <div className="text-2xl text-red-700 pt-[5px]">未経験歓迎！！</div>
            <div className="text-4xl text-blue-400 pl-[10px]">
              オペレータ・SE募集
            </div>
          </div>
          <div className="text-sm">
            どれだけ技術が進歩しても、行き着く先は「人対人」。そう考える弊社だ
            <br />
            からこそ人柄を重視しています。
            <br />
            IT業界はもちろん、社会人経験がなくても一緒に頑張ってくれる意欲のある方も、大歓迎です!
          </div>
          <div className="my-10 text-sm">
            ※ネットワーク基礎知識のある方、Linux基礎知識のある方も歓迎します!
          </div>
          <Workstyle />
          <div className="my-5">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recruit;
