import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Parsonal = () => {
  return (
    <>
      <Head>
        <title>個人情報保護について</title>
      </Head>
      <Header />
      <div className="flex h-screen">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6">
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Parsonal;
