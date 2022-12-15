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
        <div className="w-1/3">
          <Sidevar2 />
        </div>
        <div className="w-2/3">
          <Breadcrumbs useDefaultStyle rootLabel="ホーム" />
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Inquiry;
