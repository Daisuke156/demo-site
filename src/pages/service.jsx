import Head from "next/head";
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
        <div className="w-5/6"></div>
      </div>
    </>
  );
}
