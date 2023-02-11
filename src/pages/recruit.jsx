import { Breadcrumbs, Anchor } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Sidevar from "../components/sidevar";

const Recruit = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "採用情報", href: "/recruit" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
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
        <div className="w-5/6 px-20 py-10">
          <div className="flex justify-end bg-red-100 h-[30px]">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="flex my-10">
            <div className="text-2xl text-red-700">未経験歓迎！！</div>
            <div className="text-4xl text-blue-400">オペレータ・SE募集</div>
          </div>
          <div className="text-sm">
            どれだけ技術が進歩しても、行き着く先は「人対人」。そう考える***だ
            <br />
            からこそ人柄を重視しています。
            <br />
            IT業界はもちろん、社会人経験がなくても一緒に頑張ってくれる意欲のある方も、大歓迎です！
          </div>
          <div className="my-10 text-sm">
            ※ネットワーク基礎知識のある方、Linux基礎知識のある方も歓迎します！
          </div>
          <div className="mt-20 mb-5 bg-blue-300 h-[60px] py-[15px] text-white text-xl">
            募集要項
          </div>
          <div className="mx-5 border-y-2 border-x-2">
            <div className="flex">
              <div>
                <div className="font-bold border-2 border-x-2 border-y-2">
                  雇用形態
                </div>
                <div className="font-bold border-2 border-x-2 border-y-2 h-[150px]">
                  業務内容
                </div>
                <div className="font-bold border-2 border-x-2 border-y-2 h-[80px]">
                  給与
                </div>
                <div className="font-bold border-2 border-x-2 border-y-2 h-[150px]">
                  勤務地
                </div>
                <div className="font-bold border-2 border-x-2 border-y-2 h-[300px]">
                  勤務時間
                </div>
                <div className="font-bold border-2 border-x-2 border-y-2">
                  資格
                </div>
                <div className="font-bold border-2 border-x-2 border-y-2">
                  採用予定人数
                </div>
                <div className="font-bold border-2 border-x-2 border-y-2">
                  勤務時間
                </div>
                <div className="font-bold border-2 border-x-2 border-y-2 h-[50px]">
                  待遇
                </div>
              </div>
              <div>
                <div className="h-[28px] text-sm border-2 border-x-2 border-y-2">
                  契約社員
                </div>
                <div className="h-[150px] text-sm border-2 border-x-2 border-y-2">
                  <h1>■サービスデスク</h1>
                  <h2>
                    お客様からの問い合わせ対応や、お客様への報告・情報発信などを行う仕事です。
                    電話での業務コミュニケーション経験や、Unix、ネットワーク、Windowsの知識が活かせる仕事です。
                  </h2>
                  <h1>■オペレータ</h1>
                  <h2>
                    データセンターでのサーバ・大型汎用機の監視・運用をお願いします。
                    経験を積み、将来は運用の現場を知る人間として、SEや管理者にステップアップしていただきたいと思います。
                  </h2>
                </div>
                <div className="h-[80px] border-2 border-x-2 border-y-2 text-sm">
                  <h1>月給21万4千円以上 ※164h/月の場合、夜勤手当含む</h1>
                  <h2>※昇給あり</h2>
                  <h2>※時間外手当全額支給</h2>
                </div>
                <div className="h-[150px] border-2 border-x-2 border-y-2 text-sm">
                  <h1>■サービスデスク</h1>
                  <h2>神奈川県（川崎市/武蔵小杉駅)</h2>
                  <h1>■オペレータ</h1>
                  <h2>神奈川県（横浜市/センター北駅）</h2>
                  <h2>兵庫県（神戸市/西神中央駅）</h2>
                  <h2>愛知県（名古屋市/新栄町駅）</h2>
                </div>
                <div className="h-[300px] border-2 border-x-2 border-y-2"></div>
                <div className="text-sm border-2 border-x-2 border-y-2"></div>
                <div className="text-sm border-2 border-x-2 border-y-2"></div>
                <div className="text-sm border-2 border-x-2 border-y-2"></div>
              </div>
            </div>
          </div>
          <div className="my-80">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recruit;
