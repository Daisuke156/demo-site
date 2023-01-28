import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";
import Info from "../components/Info";

const Human = () => {
  return (
    <>
      <Head>
        <title>人材教育について</title>
      </Head>
      <div>
        <Header />
        <div className="flex">
          <div className="w-1/6">
            <Sidevar />
          </div>
          <div className="w-5/6 pb-40 pt-10 mx-10">
            <div></div>
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Human;
