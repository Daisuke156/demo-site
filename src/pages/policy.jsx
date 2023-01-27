import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";
import { useState } from "react";
import { AspectRatio, Button, Card, Collapse, Image } from "@mantine/core";

const Policy = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Head>
        <title>当社の理念</title>
      </Head>
      <Header />
      <div className="h-full flex">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 px-20s pb-40">
          <div className="my-10 text-4xl font-bold">当社の理念</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            rerum aut fugiat, distinctio blanditiis voluptatum debitis sequi.
            Illo harum omnis natus vel ullam expedita pariatur doloribus dicta,
            minus iste sit!
          </div>
          <div>
            <Button
              className="bg-blue-500 my-10"
              onClick={() => setOpened((o) => !o)}
            >
              代表からの言葉
            </Button>
            <Collapse in={opened}>
              <div className="flex">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque rerum aut fugiat, distinctio blanditiis voluptatum
                  debitis sequi. Illo harum omnis natus vel ullam expedita
                  pariatur doloribus dicta, minus iste sit!
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque rerum aut fugiat, distinctio blanditiis voluptatum
                  debitis sequi. Illo harum omnis natus vel ullam expedita
                  pariatur doloribus dicta, minus iste sit!
                </div>
                <div className="mx-10">
                  <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                      <Image
                        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={150}
                        alt="Norway"
                      />
                    </Card.Section>
                  </Card>
                </div>
              </div>
            </Collapse>
            <div className="my-10 text-blue-400 text-xl hover:underline hover:text-red-400">
              <Link href="/interview">外部リンク</Link>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mb-10 w-1/2">
              <div className="text-xl mb-10 text-center">当社の取り組み</div>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/Dorf8i6lCuk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
            <div className="mb-10 w-1/2 mx-10">
              <div className="text-xl mb-10 text-center">現場風景</div>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/Dorf8i6lCuk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
