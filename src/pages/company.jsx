import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "nextjs-breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar2 from "../components/Sidevar2";

const Company = () => {
  return (
    <>
      <Head>
        <title>会社概要</title>
      </Head>
      <Header />
      <div className="flex">
        <div className="w-1/3">
          <Sidevar2 />
        </div>
        <div className="w-2/3">
          <Breadcrumbs rootLabel="ホーム" />
          <div>会社概要</div>
          <div className="flex">
            <div>
              <h1>会社名</h1>
              <h2>所在地</h2>
              <h3>設立</h3>
              <h4>営業種目</h4>
              <h5>年商</h5>
              <h6>資本金</h6>
              <h6>代表取締役</h6>
              <h6>決算期</h6>
              <h6>従業員数</h6>
              <h6>取引銀行</h6>
              <h6>取引先</h6>
            </div>
            <div>
              <h1>株式会社**</h1>
              <h2></h2>
              <h3></h3>
              <h4></h4>
              <h5></h5>
              <h6></h6>
              <h6></h6>
              <h6></h6>
              <h6></h6>
              <h6></h6>
              <h6></h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Company;
