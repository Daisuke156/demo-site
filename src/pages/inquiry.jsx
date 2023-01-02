import Head from "next/head";
import Header from "../components/Header";
import Sidevar from "../components/Sidevar";
import { useState } from "react";
import {
  NativeSelect,
  NumberInput,
  TextInput,
  Textarea,
  Anchor,
  Breadcrumbs,
  LoadingOverlay,
} from "@mantine/core";
import { IconAt } from "@tabler/icons";
import Footer from "../components/Footer";

const Inquiry = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const clickOn = () => {
    alert("alert");
  };
  const items = [
    { title: "トップ", href: "/" },
    { title: "お問い合わせ方法", href: "/contact" },
    { title: "問い合わせフォーム", href: "/inquiry" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <>
      <Head>
        <title>問い合わせフォーム</title>
      </Head>
      <Header />
      <div className="flex bg-lime-100 h-full pb-40">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="mx-20 my-10 w-5/6">
          <Breadcrumbs>{items}</Breadcrumbs>
          <div className="my-10 font-bold text-4xl">お問い合わせ</div>
          <div
            className="mx-10 my-10"
            style={{ width: 800, position: "relative" }}
          >
            <LoadingOverlay visible={visible} overlayBlur={2} />
            <TextInput
              placeholder="Your name"
              label="Full name"
              withAsterisk
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
            <TextInput
              label="Your email"
              placeholder="Your email"
              icon={<IconAt size={14} />}
              withAsterisk
            />
            <NumberInput
              defaultValue={20}
              placeholder="Your age"
              label="Your age"
              withAsterisk
            />
            <NativeSelect
              data={["---", "about our company", "recruit", "jobs", "others"]}
              label="Select your question"
              withAsterisk
            />
            <Textarea placeholder="Your comment" label="Your comment" />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setVisible((v) => !v)}
              className="border-2 my-10 border-gray-500 font-bold bg-pink-200 h-[50px] w-[100px]"
            >
              ボタン
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Inquiry;
