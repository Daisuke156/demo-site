import Head from "next/head";
import Header from "../components/Header";
import Sidevar from "../components/Sidevar";
import { useState } from "react";
import { TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons";

const Inquiry = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Head>
        <title>問い合わせフォーム</title>
      </Head>
      <Header />
      <div className="flex">
        <div>
          <Sidevar />
        </div>
        <div className="mx-20 my-10">
          <div className="my-10 font-bold text-4xl">お問い合わせ</div>
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
        </div>
      </div>
    </>
  );
};
export default Inquiry;
