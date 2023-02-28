import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import { Anchor, Breadcrumbs } from "@mantine/core";
import Side2 from "../components/Side2";

const Policy = () => {
  const items = [
    { title: "HOME", href: "/" },
    { title: "当社の理念", href: "/policy" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Head>
        <title>当社の理念</title>
      </Head>
      <Header />
      <div className="h-full flex">
        <div className="w-1/6">
          <Side2 />
        </div>
        <div className="w-5/6 pb-40 pt-10 mx-10">
          <div className="flex justify-end bg-red-100 h-[30px]">
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className="my-5 text-sm">
            時空を超えていつまでも続く***を創ろう
          </div>
          <div className="text-4xl mx-20 text-red-800">
            時空を超えていつまでも続く仲間を創ろう
          </div>
          <div className="flex mx-20 mt-10 text-2xl">
            <div className="text-red-600">自己の実現</div>
            <div>による会社の発展</div>
          </div>
          <div className="mx-20">(高い人間性による集団の活動)</div>
          <div className="flex mx-20 mt-10 text-2xl">
            <div className="text-red-600">個人の意思の総和</div>
            <div>による会社の推進</div>
          </div>
          <div className="mx-20">(個々の存在を尊重し協調できる集団 )</div>
          <div className="my-10 text-sm mx-10">
            今日のグローバル化の波は人々の意識を益々加速させ、拡大する情報の渦は激動する価値の潮流として会
            <br />
            社を変革し続けています。
          </div>
          <div className="text-sm mx-10">
            現在の、私たちの社会では、常に止まらない加速度的な変化に対応する能力が必要です。
            <br />
            私たちは、先人たちが抱いた未知の世界への希望やたゆまぬ努力、社会の変革に対する
            <br />
            姿勢から学ぶだけではなく、もっとはるかに遠い、人類が今日までにたどり着いた生命の本質を
            <br />
            理解し、未来に立ち向かっていくことが必要であると考えます。
            <br />
            人間の外に向けたこだわりではなく、幾多の命を繋いで辿り着いた、自分たちの内に宿る良質な叡智を発
            <br />
            揮し、 未知なる世界へ挑む自信を持つことだと思います。
          </div>
          <div className="my-10 text-sm mx-10">
            私たちは、社員一人ひとりが素直に相手を尊重し、認め、思いやることによって、
            仲間に恵ま
            <br />
            れ、自信に満ちた人生を得ることを願っております。
          </div>
          <div className="my-5">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
