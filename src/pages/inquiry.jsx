import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import Header from "../components/Header";
import sidevar from "../components/sidevar";

const Inquiry = () => {
  return (
    <>
      <Head>
        <title>問い合わせフォーム</title>
      </Head>
      <Header />
      <div className="flex">
        <div>
          <sidevar />
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
