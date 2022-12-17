import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import Header from "../../components/Header";
import Sidevar from "../../components/sidevar";

const Nagoya = () => {
  return (
    <>
      <Head>
        <title>名古屋事務所</title>
      </Head>
      <Header />
      <div className="flex">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6">
          <Breadcrumbs useDefaultStyle rootLabel="ホーム" />
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Nagoya;
