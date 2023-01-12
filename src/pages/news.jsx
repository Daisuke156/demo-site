import Head from "next/head";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";
import Footer from "../components/Footer";

const ITEMS = [
  {
    href: "/",
    title: "2月",
  },
  {
    href: "/",
    title: "1月",
  },
  {
    href: "/",
    title: "22年下半期",
  },
  {
    href: "/",
    title: "22年上半期",
  },
];
const News = () => {
  return (
    <>
      <Head>
        <title>最新情報</title>
      </Head>
      <Header />
      <div className="flex">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 bg-lime-200 px-20 pb-40">
          <div className="my-10 text-4xl font-bold">最新情報</div>
          <div className="my-20">
            {ITEMS.map((item) => {
              return (
                <div className="text-2xl my-10 text-blue-600 w-[500px] hover:underline hover:text-red-600">
                  <a href={item.href}>
                    <li>{item.title}</li>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default News;
