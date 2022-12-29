import Head from "next/head";

const Parsonal = () => {
  return (
    <>
      <Head>
        <title>個人情報保護について</title>
      </Head>
      <Header />
      <div className="flex">
        <div className="w-1/6">
          <sidevar />
        </div>
        <div className="w-5/6">
          <Breadcrumbs useDefaultStyle rootLabel="ホーム" />
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Parsonal;
