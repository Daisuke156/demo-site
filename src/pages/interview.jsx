import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";
import { AspectRatio, Image } from "@mantine/core";
import Link from "next/link";
import Info from "../components/Info";

const Interview = () => {
  return (
    <>
      <Head>
        <title>代表者の言葉</title>
      </Head>
      <Header />
      <div className="h-full flex">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 py-10 px-20">
          <div className="mb-10 text-4xl font-bold">当社代表</div>
          <div className="">
            <div>代表者名:***</div>
            <div>
              <AspectRatio ratio={240 / 240} sx={{ maxWidth: 200 }} mx="auto">
                <Image
                  src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                  alt="Panda"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="my-20">
            <div className="text-2xl my-10">代表者の言葉</div>
            <div className="text-2xl">SNS</div>
            <div className="my-10 mx-5 text-blue-500">
              <Link href="/">Twitter</Link>
            </div>
            <div className="mx-5 text-blue-500">
              <Link href="/">Facebook</Link>
            </div>
          </div>
          <Info />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Interview;
