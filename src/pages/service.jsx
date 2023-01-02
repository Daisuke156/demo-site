import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const service = () => {
  return (
    <>
      <Head>
        <title>業務内容</title>
      </Head>
      <Header />
      <div className="flex bg-lime-200 h-full pb-40">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 py-10 px-20">
          <div className="mb-10 text-4xl font-bold">業務内容</div>
          <div className="my-10 text-2xl">開発</div>
          <h1></h1>
          <h2></h2>
          <h3></h3>
          <div className="my-10 text-2xl">業務系</div>
          <h1></h1>
          <h2></h2>
          <h3></h3>
          <div className="my-10 text-2xl">ヘルプデスク</div>
          <h1></h1>
          <h2></h2>
          <h3></h3>
          <div className="my-10 text-2xl">オペレータ</div>
          <h1></h1>
          <h2></h2>
          <h3></h3>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default service;
