import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";

const Inqury = () => {
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
export default Inqury;
