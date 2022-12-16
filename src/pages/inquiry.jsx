import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import Header from "../components/Header";
import Sidevar2 from "../components/Sidevar2";

const Inquiry = () => {
  return (
    <>
      <Head>
        <title>問い合わせフォーム</title>
      </Head>
      <Header />
      <div className="flex">
        <div>
          <Sidevar2 />
        </div>
        <div className="">
          <Breadcrumbs useDefaultStyle rootLabel="ホーム" />
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Inquiry;
