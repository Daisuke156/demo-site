import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar2 from "../components/Sidevar2";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>お問い合わせ</title>
      </Head>
      <div>
        <div>
          <Header />
        </div>
        <div className="flex">
          <div>
            <Sidevar2 />
          </div>
          <div>
            <div>
              <Breadcrumbs rootLabel="ホーム" />
            </div>
            <div>お電話での問い合わせ</div>
            <div className="flex">
              <div>ロゴ</div>
              <div>株式会社**</div>
            </div>
            <div className="flex">
              <div>東京事務所(本部)</div>
              <div>〒105-1111 東京都**区</div>
            </div>
            <div className="flex">
              <div>電話受付時間:平日9:00〜17:00</div>
              <div>0120-111-222</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
