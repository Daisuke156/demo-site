import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Head>
        <title>Demo Site</title>
      </Head>
      <Header />
      <main>
        <div className="bg-blue-200 h-screen">
          <h1 className="text-4xl text-red-600 py-10 px-20">ニュース</h1>
          <h2 className="texl-xl">
            <Link href="/">
              <a>ニュース一覧</a>
            </Link>
          </h2>
        </div>
      </main>
    </>
  );
};
export default Home;
