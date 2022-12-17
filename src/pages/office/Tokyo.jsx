import Head from "next/head";
import Header from "../../components/Header";
import Breadcrumbs from "nextjs-breadcrumbs";
import Sidevar from "../../components/sidevar";

const Tokyo = () => {
  return (
    <>
      <Head>
        <title>東京事務所</title>
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
export default Tokyo;
