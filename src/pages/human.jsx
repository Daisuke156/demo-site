import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Side2 from "../components/Side2";
import Info from "../components/Info";
import Link from "next/link";
import { Anchor, Breadcrumbs } from "@mantine/core";

const Human = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "***の人材育成について", href: "/human" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>人材教育について</title>
      </Head>
      <div>
        <Header />
        <div className="flex">
          <div className="w-1/6">
            <Side2 />
          </div>
          <div className="w-5/6 py-10 mx-10">
            <div className="flex justify-end bg-red-100 h-[30px]">
              <Breadcrumbs>{items}</Breadcrumbs>
            </div>
            <div className="my-10 text-2xl text-blue-400 mx-5">
              <h1>①社会人としての一歩を踏み出すための新人教育</h1>
              <h1 className="my-[10px]">
                ②オペレータからSEにステップアップするためのSE教育
              </h1>
              <h1>③チームリーダ/管理者となるためのマネジメント教育</h1>
            </div>
            <div className="bg-red-700 text-xl text-white h-[50px] py-[10px]">
              - ①新人教育
            </div>
            <div className="flex text-sm my-5">
              <h1></h1>
              <h1>
                まず社会人としての第一歩を踏み出すためのビジネスマナー教育を最優先とし、情報処
                <br />
                理に携わる者としてのセキュリティ教育、実務で必要となるOffice/PC基礎知識、ネッ
                <br />
                トワーク基礎知識の教育を行います。
              </h1>
            </div>
            <div className="bg-red-700 text-xl text-white h-[50px] py-[10px]">
              - ②SE教育
            </div>
            <div className="flex text-sm my-5">
              <h1></h1>
              <h1>
                コンピュータスキルをさらに深めるための教育です。SEへのステップアップを志望する
                <br />
                オペレータのために、Unix/Windowsサーバ構築/ネットワーク設計/システム構築/
                <br />
                運用設計に関する教育を行います。
              </h1>
            </div>
            <div className="bg-red-700 text-xl text-white h-[50px] py-[10px]">
              - ③マネジメント教育
            </div>
            <div className="flex text-sm my-5">
              <h1></h1>
              <h1>
                オペレータ/SEを問わず、チームリーダ候補者以上を対象とした職務意識、要員管理、
                <br />
                ドキュメント技法、関連法務について教育を行います。
              </h1>
            </div>
            <div className="my-5 bg-gray-200 h-[80px] flex justify-center py-[15px]">
              <h1 className="bg-gray-100 h-[50px] w-[500px] flex justify-center py-[10px] hover:bg-gray-50">
                <h2 className="text-2xl">
                  <Link href="/recruit">採用情報はこちら ＞</Link>
                </h2>
              </h1>
            </div>
            <div className="my-20">
              <Info />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Human;
