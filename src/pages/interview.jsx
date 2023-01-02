import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Interview = () => {
  return (
    <>
      <Head>
        <title>代表者の言葉</title>
      </Head>
      <Header />
      <div className="flex bg-lime-100">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 py-10 px-20">
          <div className="mb-10 text-4xl font-bold">代表</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Interview;
