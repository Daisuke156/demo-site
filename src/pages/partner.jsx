import Head from "next/head";

const Partner = () => {
  return (
    <>
      <Head>
        <title>パートナー募集</title>
      </Head>
      <Header />
      <div className="flex">
        <div className="w-1/6">
          <sidevar />
        </div>
        <div className="w-5/6">
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Partner;
