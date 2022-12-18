import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import Header from "../components/Header";
import Sidevar from "../components/Sidevar";

const Inquiry = () => {
  return (
    <>
      <Head>
        <title>問い合わせフォーム</title>
      </Head>
      <Header />
      <div className="flex">
        <div>
          <Sidevar />
        </div>
        <div className="">
          {/* <Breadcrumbs useDefaultStyle rootLabel="ホーム" /> */}
        </div>
      </div>
    </>
  );
};
export default Inquiry;
