import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Side2 from "../components/Side2";
import Info from "../components/Info";
import { Anchor, Breadcrumbs } from "@mantine/core";

const Partner = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "パートナー募集", href: "/partner" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>パートナー募集</title>
      </Head>
      <Header />
      <div className="flex h-full">
        <div className="w-1/6">
          <Side2 />
        </div>
        <div className="w-5/6 pb-40 pt-10 mx-10">
          <div className="flex justify-end bg-red-100 h-[30px]">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="py-10 mx-10">
            <div className="text-2xl text-red-600">
              ビジネスパートナーとして弊社が お役に立てること 、<br />
              貴社にご協力いただけることは ございませんか？
            </div>
            <div className="text-xl my-5 mx-5 text-blue-400 font-bold">
              より一層のビジネスチャンスを求めて
            </div>
            <div className="text-sm my-5">
              弊社では、システム構築・システム運用の領域において、共に成長していける協力
              <br />
              会社様を募集しております。
              <br />
              私たちは、強力な「ビジネスパートナーシップ」の確立が、新しい価値やビジネス
              <br />
              を生み出す大きな力になると考えています。志の高い企業同士が協力関係を構築す
              <br />
              ることで、よりグローバルな企業戦略を図ることが可能となるでしょう。
              <br />
              相互の事業へのシナジー効果を最大限に発揮し、更なるビジネスチャンスを獲得し
              <br />
              ませんか？
            </div>
            <div className="text-sm my-5">
              業種や距離は問いません。
              <br />
              ビジネスパートナーとしてご協力いただける方、あるいは少しでも興味を持ってく
              <br />
              ださった方は、ぜひ一度弊社までご連絡ください。
            </div>
            <div className="text-sm my-5">
              お互いのスキル・技術力・ノウハウを共有することで、Win-Winの関係を築いてい
              <br />
              けることを願っております。
              <br />
              弊社と共に、相互の事業拡大と安定的成長を目指しましょう。
            </div>
            <div className="flex">
              <div className="font-bold text-sm">
                <h1 className="h-[40px] border-2 border-x-2 border-y-2">
                  対象工種
                </h1>
                <h1 className="h-[60px] border-2 border-x-2 border-y-2">
                  応募資格要件
                </h1>
                <h1 className="h-[80px] border-2 border-x-2 border-y-2">
                  お問い合わせ先
                </h1>
              </div>
              <div className="text-sm">
                <h1 className="h-[40px] border-2 border-x-2 border-y-2">
                  ネットワーク設計・構築 サーバ(UNIX/WINDOWS) 構築・運用
                </h1>
                <h1 className="h-[60px] border-2 border-x-2 border-y-2">
                  特に応募資格などは設けておりませんが、上記内容においての実績を考慮のうえ、
                  <br />
                  ご検討させていただきます。
                </h1>
                <h1 className="h-[80px] border-2 border-x-2 border-y-2">
                  ご連絡先、貴社の業務概要等をご記入したうえ、下記までメールにてお送りください。
                  <h2 className="text-red-700 my-5 text-sm hover:underline">
                    <a href="mailto:jungle379@gmail.com">メールはこちら</a>
                  </h2>
                </h1>
              </div>
            </div>
            <div className="mt-80">
              <Info />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Partner;
