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
              <div className="text-2xl font-bold">経験者の方</div>
              <h1>開発エンジニア</h1>
              <h2>フロント・バックエンド開発</h2>
              <h3>使用言語</h3>
              <h1>業務エンジニア</h1>
              <h2>基幹系開発</h2>
              <h3>使用言語</h3>
              <h3>ヘルプデスク</h3>
              <div className="hover:underline">
                <Link href="/recruit/kaihatu">応募ページへ</Link>
              </div>
            </div>
            <div>
              <div className="mb-20 mt-10 ml-10">
                <div className="text-2xl font-bold">業界未経験の方</div>
                <h1>当社は未経験の方も積極的に採用しております！</h1>
                <h2>詳しくは以下リンクより</h2>
                <div className="hover:underline">
                  <Link href="/recruit/non">応募ページへ</Link>
                </div>
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
