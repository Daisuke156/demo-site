import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>業務内容</title>
      </Head>
      <Header />
      <div className="flex bg-lime-200">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 py-10 px-20">
          <div className="mb-10 text-4xl font-bold">業務内容</div>
          <div>開発</div>
          <div>業務系</div>
          <div>ヘルプデスク</div>
          <div>オペレータ</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
