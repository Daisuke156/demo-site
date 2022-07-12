import Head from "next/head";
import Breadcrumbs from "nextjs-breadcrumbs";

const Inqury = () => {
  return (
    <>
      <Head>
        <title>問い合わせフォーム</title>
      </Head>
      <main>
        <Breadcrumbs useDefaultStyle rootLabel="Home" />;
      </main>
    </>
  );
};
export default Inqury;
