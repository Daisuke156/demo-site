import Head from "next/head";
import { Modal, Button, Group } from "@mantine/core";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidevar from "../../components/sidevar";
import { useState } from "react";

const non = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Head>
        <title>応募フォーム(未経験)</title>
      </Head>
      <Header />
      <div className="flex h-screen">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 px-20 bg-lime-100">
          <div>
            <div className="my-10 text-4xl font-bold">応募フォーム</div>
            <div className="mb-10  font-bold text-2xl">未経験の方</div>
            <div className="bg-blue-500 w-[100px]">
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Introduce yourself!"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                aliquam amet inventore aspernatur eum in harum dolores aliquid
                provident sapiente perspiciatis officia, similique tempora. Ab,
                eius velit. Impedit, maxime cupiditate?
              </Modal>

              <Group position="center">
                <Button onClick={() => setOpened(true)}>募集要項</Button>
              </Group>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default non;
