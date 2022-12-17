import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";
import Header from "../components/Header";
import sidevar from "../components/sidevar";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>業務内容</title>
      </Head>
      <Header />
      <div className="flex">
        <div className="w-1/3">
          <sidevar />
        </div>
        <div className="w-2/3">
          <Breadcrumbs useDefaultStyle rootLabel="ホーム" />
          <div></div>
        </div>
      </div>
    </>
  );
}
