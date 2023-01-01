import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Branch = () => {
  return (
    <>
      <Head>
        <title>各事業所について</title>
      </Head>
      <Header />
      <div className="h-screen bg-blue-100 px-10">
        <div className="font-bold text-4xl py-10">各事業所紹介</div>
        <div className="mb-20 px-10">
          当社の事業所は全国にございます。詳細は以下のリンクからご確認ください。
        </div>
        <div className="flex justify-evenly">
          <div className="border-gray-400 border-4 w-[200px]">
            <div className="text-xl">
              <Link href="/office/Tokyo">東京事務所(本部)</Link>
            </div>
            <h1>〒105-0000</h1>
            <h2>東京都＊＊区</h2>
            <h3>03-1111-2222(代)</h3>
          </div>
          <div className="border-gray-400 border-4 w-[200px]">
            <div className="text-xl">
              <Link href="/office/Osaka">大阪事務所</Link>
            </div>
            <h1>〒562-0000</h1>
            <h2>大阪府大阪市＊＊区</h2>
            <h3>06-1111-2222</h3>
          </div>
          <div className="border-gray-400 border-4 w-[200px]">
            <div className="text-xl">
              <Link href="/office/Nagoya">名古屋事務所</Link>
            </div>
            <h1>〒460-0000</h1>
            <h2>愛知県名古屋市＊＊区</h2>
            <h3>052-111-2222</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Branch;
