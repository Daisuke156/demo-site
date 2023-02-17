import { AspectRatio } from "@mantine/core";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Side2 from "../components/Side2";

const Branch = () => {
  return (
    <>
      <Head>
        <title>各事業所について</title>
      </Head>
      <Header />
      <div className="h-full">
        <div className="flex">
          <div className="w-1/6">
            <Side2 />
          </div>
          <div className="mx-10 my-10 w-5/6">
            <div className="font-bold text-4xl pb-20">各事業所紹介</div>
            <div className="mb-10 px-10">
              当社の事業所は全国にございます。詳細は以下のリンクからご確認ください。
            </div>
            <div className="mx-20">
              <div className="my-10">
                <div className="font-bold text-xl">東京事業所(本部)</div>
                <div className="h-[400px] w-[400px]">
                  <AspectRatio ratio={100 / 100}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
                      title="Google map"
                    />
                  </AspectRatio>
                </div>
              </div>
              <div className="my-10">
                <div className="font-bold text-xl">大阪事業所</div>
                <div className="h-[400px] w-[400px]">
                  <AspectRatio ratio={100 / 100}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
                      title="Google map"
                    />
                  </AspectRatio>
                </div>
              </div>
              <div className="my-10">
                <div className="font-bold text-xl">名古屋事業所</div>
                <div className="h-[400px] w-[400px]">
                  <AspectRatio ratio={100 / 100}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
                      title="Google map"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
            <div className="my-80">
              <Info />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Branch;
