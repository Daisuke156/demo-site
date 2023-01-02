import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const recruit = () => {
  return (
    <>
      <Head>
        <title>採用情報</title>
      </Head>
      <Header />
      <div className="flex h-full">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 px-20 py-10 bg-lime-100">
          <div>
            <div className="text-4xl font-bold">採用情報</div>
            <div className="mb-20 mt-10 ml-10">
              <div className="text-2xl font-bold my-10">経験者の方</div>
              <h1 className="text-xl mb-10">開発エンジニア</h1>
              <h2 className="text-sm">フロント・バックエンド開発</h2>
              <h3 className="text-sm">使用言語:</h3>
              <h1 className="mt-10 text-xl mb-10">業務エンジニア</h1>
              <h2 className="text-sm">基幹系開発</h2>
              <h3 className="text-sm">使用言語:</h3>
              <h1 className="mt-10 text-xl mb-10">ヘルプデスク</h1>
              <h2 className="text-sm">ヘルプデスク、キッティングなど</h2>
              <div className="hover:underline text-blue-300 hover:text-red-600 my-10">
                <Link href="/recruit/kaihatu">応募ページへ</Link>
              </div>
            </div>
            <div className="mb-20 ml-10">
              <div className="text-2xl font-bold my-10">業界未経験の方</div>
              <h1>当社は未経験の方も積極的に採用しております！</h1>
              <h2>詳しくは以下リンクより</h2>
              <div className="my-10 hover:underline text-blue-300 hover:text-red-600">
                <Link href="/recruit/non">応募ページへ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default recruit;
