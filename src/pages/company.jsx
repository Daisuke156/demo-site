import { Anchor, Breadcrumbs } from "@mantine/core";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Side2 from "../components/Side2";

const ITEMS = [
  {
    href: "/",
    title: "**株式会社",
  },
  {
    href: "/",
    title: "株式会社**",
  },
  {
    href: "/",
    title: "**株式会社",
  },
];

const Company = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "会社概要", href: "/company" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>会社概要</title>
      </Head>
      <div>
        <Header />
        <div className="flex">
          <div className="w-1/6">
            <Side2 />
          </div>
          <div className="w-5/6 pt-10 mx-10">
            <div className="flex justify-end bg-red-100 h-[30px]">
              <Breadcrumbs>{items}</Breadcrumbs>
            </div>
            <div className="bg-red-700 text-white text-2xl py-[3px] h-[40px] mt-5">
              会社概要
            </div>
            <div className="bg-gray-100">
              <div className="px-5 py-5">
                <div className="flex">
                  <div className="text-white bg-blue-800 w-1/5 border-2 border-white">
                    <h1>
                      <h2 className="py-[5px] px-[10px]">会社名</h2>
                    </h1>
                    <h1 className="h-[500px] border-white border-y-2">
                      <h2 className="py-[5px] px-[10px]">所在地</h2>
                    </h1>
                    <h1 className="py-[5px]">
                      <h2 className="py-[5px] px-[10px]">設立</h2>
                    </h1>
                    <h1 className="border-white border-y-2">
                      <h2 className="py-[5px] px-[10px] h-[250px]">営業種目</h2>
                    </h1>
                    <h1 className="py-[5px]">
                      <h2 className="py-[5px] px-[10px]">年商</h2>
                    </h1>
                    <h1 className="border-white border-y-2">
                      <h2 className="py-[5px] px-[10px]">資本金</h2>
                    </h1>
                    <h1 className="py-[5px]">
                      <h2 className="py-[5px] px-[10px]">代表取締役</h2>
                    </h1>
                    <h1 className="border-white border-y-2">
                      <h2 className="py-[5px] px-[10px]">決算期</h2>
                    </h1>
                    <h1 className="py-[5px]">
                      <h2 className="py-[5px] px-[10px]">従業員数</h2>
                    </h1>
                    <h1 className="border-white border-y-2 h-[160px]">
                      <h2 className="py-[5px] px-[10px]">取引銀行</h2>
                    </h1>
                    <h1 className="py-[5px] h-[180px]">
                      <h2 className="py-[5px] px-[10px]">取引先</h2>
                    </h1>
                  </div>
                  <div className="text-sm bg-white w-4/5">
                    <h1 className="py-[5px] h-[34px]">
                      <h2 className="py-[3px]">株式会社****</h2>
                    </h1>
                    <h1 className="py-[5px] border-y-2 h-[500px]">
                      <li className="text-blue-700 font-bold">
                        東京事業所(本部)
                      </li>
                      <h2 className="my-5">〒105-**** 東京都港区****</h2>
                      <h3 className="mb-5">TEL:03-****-****</h3>
                      <li className="text-blue-700 font-bold">大阪事業所</li>
                      <h2 className="my-5">〒560-**** 大阪府大阪市***</h2>
                      <h3 className="mb-5">TEL:06-****-****</h3>
                      <li className="text-blue-700 font-bold">名古屋事業所</li>
                      <h2 className="my-5">〒460-**** 愛知県名古屋市***</h2>
                      <h3 className="mb-5">TEL:052-***-****</h3>
                    </h1>
                    <h1 className="py-[5px] h-[44px]">
                      <h2 className="py-[5px]">1987年6月</h2>
                    </h1>
                    <h1 className="py-[5px] border-y-2 h-[255px]">
                      <li>システム運用</li>
                      <li className="my-10">システム開発</li>
                    </h1>
                    <h1 className="py-[5px] h-[45px]">
                      <h2 className="py-[5px]">1億円</h2>
                    </h1>
                    <h1 className="py-[5px] border-y-2 h-[38px]">
                      <h2 className="py-[5px]">1000万円</h2>
                    </h1>
                    <h1 className="py-[5px] h-[44px]">
                      <h2 className="py-[5px]">** **</h2>
                    </h1>
                    <h1 className="py-[5px] border-y-2 h-[38px]">
                      <h2 className="py-[5px]">3月</h2>
                    </h1>
                    <h1 className="py-[5px] h-[44px]">
                      <h2 className="py-[5px]">100人(令和5年1月時点)</h2>
                    </h1>
                    <h1 className="py-[5px] border-y-2 h-[160px]">
                      <h2 className="py-[5px]">
                        <li>***銀行</li>
                        <li className="my-5">**バンク</li>
                        <li>****銀行</li>
                      </h2>
                    </h1>
                    <h1 className="py-[5px] h-[180px]">
                      <h2>
                        {ITEMS.map((item) => {
                          return (
                            <div className="text-sm mb-5 text-blue-600 hover:underline hover:text-red-600">
                              <a href={item.href}>
                                <li>{item.title}</li>
                              </a>
                            </div>
                          );
                        })}
                      </h2>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <Info />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Company;
