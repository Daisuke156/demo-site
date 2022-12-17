import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import sidevar from "../components/sidevar";
import { useRouter } from "next/router";

const FirstPost = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>お問い合わせ</title>
      </Head>
      <div>
        <Header />
        <div className="flex">
          <div>
            <sidevar />
          </div>
          <div>
            <div>
              <Breadcrumbs rootLabel="ホーム" />
            </div>
            <div className="text-4xl font-bold my-10">お問い合わせ方法</div>
            <div className="text-2xl mx-10 mb-5">お電話での問い合わせ</div>
            <div className="flex">
              <div className="mx-10">ロゴ</div>
              <div>株式会社**</div>
            </div>
            <div className="flex">
              <div className="mx-10 my-10">東京事務所(本部)</div>
              <div className="my-10">〒105-1111 東京都**区</div>
            </div>
            <div className="flex">
              <div className="mx-10">電話受付時間:平日9:00〜17:00</div>
              <div>0120-111-222</div>
            </div>
            <div className="text-2xl my-20 mx-10">Webでのお問い合わせ</div>
            <div className="font-bold bg-gray-100 mx-10 border-4 border-gray-400 text-center w-[200px]">
              <button onClick={() => router.push("../inquiry")}>
                入力フォームへ
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FirstPost;
