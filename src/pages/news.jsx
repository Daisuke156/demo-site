import Head from "next/head";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const News = () => {
  return (
    <>
      <Head>
        <title>最新情報</title>
      </Head>
      <Header />
      <div className="h-screen bg-lime-200">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div>最新情報</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
export default News;
