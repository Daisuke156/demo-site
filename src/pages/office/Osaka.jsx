import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import Header from "../../components/Header";
import Sidevar from "../../components/sidevar";

const Osaka = () => {
  return (
    <>
      <Head>
        <title>大阪事務所</title>
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
export default Osaka;
