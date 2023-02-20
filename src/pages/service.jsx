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
      <div className="flex h-full pb-40">
        <div className="w-1/6">
          <Side2 />
        </div>
        <div className="w-5/6 pb-40 pt-10 mx-10">
          <div className="flex justify-end bg-red-100 h-[30px]">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="flex mt-10">
            <div className="text-red-700 text-2xl">ITアウトソーシング</div>
            <div className="text-sm py-[5px]">
              (IT標準スキル標準的における、ITサービスマネジメント領域)
            </div>
          </div>
          <div>に特化したサービスを展開しています。</div>
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
                <h1 className="my-6">
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
            <div className="bg-red-700 text-2xl text-white h-[50px] py-[10px] mt-10">
              - 大型汎用機オペレーション
            </div>
            <div className="border-2 border-gray-2">
              <div className="mx-5 my-5 text-sm">
                <h1>
                  インターネット上のWebサーバや、お客様の基幹システムを構成してい
                  <br />
                  るサーバ等の正常動作監視及び異常時の対応が主な業務になります。
                </h1>
                <h1 className="my-6">
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
export default Service;
