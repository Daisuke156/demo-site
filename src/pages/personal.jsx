import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Sidevar from "../components/sidevar";

const Personal = () => {
  return (
    <>
      <Head>
        <title>個人情報保護について</title>
      </Head>
      <Header />
      <div className="h-full flex">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 py-10 px-20">
          <div className="mb-10 text-4xl font-bold">個人情報保護について</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="my-80">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Personal;
