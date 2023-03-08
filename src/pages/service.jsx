import { Anchor, Breadcrumbs, Card, Image } from "@mantine/core";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Side2 from "../components/Side2";
import Info from "../components/Info";

const Service = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "業務内容", href: "/service" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>業務内容</title>
      </Head>
      <Header />
      <div className="flex h-full">
        <div className="w-1/6">
          <Side2 />
        </div>
        <div className="w-5/6 py-10 mx-10">
          <div className="flex justify-end bg-red-100 h-[30px]">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="flex mt-10">
            <div className="text-red-700 text-2xl">ITアウトソーシング</div>
            <div className="text-sm py-[5px]">
              (IT標準スキル標準的における、ITサービスマネジメント領域)
            </div>
          </div>
          <div className="text-xl">に特化したサービスを展開しています。</div>
          <div className="my-20">
            <div className="bg-red-700 text-2xl text-white h-[50px] py-[10px]">
              - Unix/windowsサーバオペレーション
            </div>
            <div className="border-2 border-gray-2">
              <div className="mx-5 my-5 text-sm">
                <h1>
                  インターネット上のWebサーバや、お客様の基幹システムを構成してい
                  <br />
                  るサーバ等の正常動作監視及び異常時の対応が主な業務になります。
                </h1>
                <h1 className="my-5">
                  上流工程へとステップアップするための最初の仕事となるので、業務に
                  <br />
                  従事する中で、徐々にシステムへの理解（Webサーバの仕組み/基幹シス
                  <br />
                  テムの構成など）を深めてく必要があります。
                </h1>
                <h1>
                  また、サーバ監視は24時間行う必要があるため、1人では絶対にできな
                  <br />
                  い仕事です。
                  <br />
                  そのため、まずは「組織として、チームワークよく仕事にあたる」こと
                  <br />
                  を学んでいきます。
                </h1>
              </div>
            </div>
            <div className="bg-red-700 text-2xl text-white h-[50px] py-[10px] mt-5">
              - 大型汎用機オペレーション
            </div>
            <div className="border-2 border-gray-2">
              <div className="mx-5 my-5 text-sm">
                <h1>
                  メインフレームと呼ばれる大型汎用機（大規模な基幹業務を処理するた
                  <br />
                  めに作られた、あまり一般の人が目に
                  <br />
                  することのないコンピュータです）の操作が主な業務になります。
                </h1>
                <h1 className="my-5">
                  サーバオペレーション同様、システムへの理解と組織として活動する力
                  <br />
                  を養います。
                </h1>
              </div>
            </div>
            <div className="bg-red-700 text-2xl text-white h-[50px] py-[10px] mt-5">
              - システム運用
            </div>
            <div className="border-2 border-gray-2">
              <div className="mx-5 my-5 text-sm">
                <h1>
                  サーバやメインフレーム上で動作しているシステムが、期待通りに稼動
                  <br />
                  することを保障する（そのために問題の分析やお客様との交渉、予期せ
                  <br />
                  ぬトラブルへの対応等を行う）仕事となります。オペレーションからの
                  <br />
                  ステップアップ先として最も多いのがこのシステム運用です。
                </h1>
                <h1 className="my-5">
                  そのためには、オペレーション時代に培ったチームとしての活動力を強
                  <br />
                  化し、お客様の視点に立った考え方や活動をする必要があります。
                </h1>
              </div>
            </div>
            <div className="bg-red-700 text-2xl text-white h-[50px] py-[10px] mt-5">
              - 運用設計・構築
            </div>
            <div className="border-2 border-gray-2 h-[200px]">
              <div className="mx-5 my-5 text-sm">
                <h1>
                  システムが動作する環境の選定やネットワーク設計の実装を行う仕事です。
                  <br />
                  コンピュータそのものやネットワークに関する深い知識、新技術に対す
                  <br />
                  る吸収力などが求められます。
                </h1>
              </div>
            </div>
            <div className="bg-red-700 text-2xl text-white h-[50px] py-[10px] mt-5">
              - サービスデスク
            </div>
            <div className="border-2 border-gray-2 h-[200px]">
              <div className="mx-5 my-5 text-sm">
                <h1>
                  お客様からのシステムに関するお問い合わせに応対する窓口となります。
                  <br />
                  弊社ではコンピュータ（インターネットプロバイダ／コンピュータ
                  <br />
                  システム等）に特化したコールセンターとして業務を行っています。
                </h1>
              </div>
            </div>
          </div>
          <div className="my-5">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Service;
