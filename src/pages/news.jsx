import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";

const News = () => {
  return (
    <>
      <Head>
        <title>最新情報</title>
      </Head>
      <Breadcrumbs useDefaultStyle rootLabel="news" />
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};
export default News;
