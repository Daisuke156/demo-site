import Head from "next/head";

const Human = () => {
  return (
    <>
      <Head>
        <title>人材教育について</title>
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
};
export default Human;
