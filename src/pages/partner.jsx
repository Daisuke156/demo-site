import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";
import Link from "next/link";
import Info from "../components/Info";

const Partner = () => {
  return (
    <>
      <Head>
        <title>パートナー募集</title>
      </Head>
      <Header />
      <div className="flex h-full">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 pb-40">
          <div className="py-10 px-20">
            <div className="text-4xl font-bold">パートナー</div>
            <div className="text-xl my-20">
              株式会社**はパートナーとなっていただける企業様を探しています
            </div>
            <div className="text-xl my-20 hover:underline">
              <Link href="/">リンク</Link>
            </div>
          </div>
          <Info />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Partner;
