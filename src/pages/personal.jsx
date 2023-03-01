import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Side2 from "../components/side2";

const Personal = () => {
  return (
    <>
      <Head>
        <title>個人情報保護について</title>
      </Head>
      <Header />
      <div className="h-full flex">
        <div className="w-1/6">
          <Side2 />
        </div>
        <div className="w-5/6 py-10 px-20">
          <div className="mb-10 text-4xl font-bold flex justify-center">
            個人情報保護について
          </div>
          <div>
            株式会社***(以下「当社」といいます)は、ネットワーク&サーバ運用・監視やコンピュータ・オペレ
            <br />
            ーション等のアウトソーシング事業を行う企業として、便利で有益な質の高いサービスを提供することによ
            <br />
            り、お客様にご満足いただくと共に、社会に貢献できることを目指しています。このため、個人情報の保護
            <br />
            を図ることは当社の重要な社会的責務であると認識しております。
            <br />
            個人情報の重要性を、役員および全ての従業員に日頃から周知徹底し、以下の項目を個人情報保護
            <br />
            の基本方針として確実な履行に努めます。
          </div>
          <div className="mt-5">1. 個人情報の取得・利用・提供</div>
          <div className="mx-5">
            当社は、主として当社業務遂行のために個人情報を取得します。また、従業員の個人情報につい
            <br />
            ては、その目的や取り扱いについて文書あるいはそれに変わる方法で同意を得ます。その他、当社
            <br />
            がどのような個人情報を取得する場合にも事業の内容および規模を考慮した適切な個人情報を取
            <br />
            得し、取得時に利用目的を明らかにいたします。
            <br />
            また、次の場合を除き当社が保有する個人情報について、利用目的の達成に必要な範囲を超えた
            <br />
            取り扱いを行わず、目的外の利用を防ぐための処置を講じます。
            <br />
            また、本人の承諾無く第三者に開示・提供することはいたしません。
          </div>
          <div className="mx-5">
            <div>(ア) 法令に基づく場合</div>
            <div>
              (イ)
              人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが
              困難であるとき
            </div>
            <div>
              (ウ)
              公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人
              の同意を得ることが困難であるとき
            </div>
            <div>
              (エ)
              国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行すること
              に対して協力する必要がある場合であって、本人の同意を得ることによって当該事務の遂行に
              支障を及ぼす恐れがあるとき
            </div>
          </div>
          <div>2. 個人情報の安全対策</div>
          <div className="mx-5">
            当社は、個人情報の漏洩、滅失または毀損の防止および是正に関して、必要かつ適切な安全対策
            を実施いたします。
          </div>
          <div>3. 個人情報に関する苦情および相談について</div>
          <div className="mx-5">
            個人情報の取扱いに関する苦情および相談については、下記の【個人情報に関するお問い合わせ
            窓口】にて適切かつ迅速に対応いたします。
          </div>
          <div>4. 法令・規範の遵守</div>
          <div className="mx-5">
            当社は、個人情報に関する法令、国が定める指針その他規範を遵守いたします。
          </div>
          <div>5. 個人情報保護マネジメントシステムの継続的改善</div>
          <div className="mx-5">
            当社は、適切な個人情報保護に関する規定、ルール、行動規範を定め、個人情報保護に関するマ
            ネジメントシステムを運用します。また、マネジメントシステムが適切に運用できているかを定期的に
            確認、監査、見直しを行うことにより継続的に改善いたします。
          </div>
          <div className="my-5">
            本方針は役員および全ての従業員に周知徹底させるとともに、当社ホームページ上に公表いたします。
          </div>
          <div className="flex justify-end">
            <div>制定:平成21年4月1日</div>
          </div>
          <div className="border-2 py-5 my-5">
            <div className="flex justify-center">
              <div className="border-2 bg-green-200 mb-5 text-xl">
                個人情報に関するお問い合わせ窓口
              </div>
            </div>
            <div className="flex justify-center">
              <div>〒111-0001</div>
              <div className="mx-5">東京都港区***</div>
            </div>
            <div className="text-2xl flex justify-center">株式会社***</div>
            <div className="flex justify-center">担当:総 務</div>
            <div className="flex justify-center">電 話:03-****-****</div>
            <div className="flex justify-center">FAX:03-****-****</div>
            <div className="flex justify-center">電子メール:</div>
          </div>
          <div className="my-10">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Personal;
