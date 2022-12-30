import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";
import { useState } from "react";
import { AspectRatio, Button, Collapse } from "@mantine/core";

const Policy = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Head>
        <title>当社の理念</title>
      </Head>
      <Header />
      <div className="flex">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 px-20 bg-lime-100">
          <div className="my-10 text-4xl font-bold">当社の理念</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            rerum aut fugiat, distinctio blanditiis voluptatum debitis sequi.
            Illo harum omnis natus vel ullam expedita pariatur doloribus dicta,
            minus iste sit!
          </div>
          <div className="flex">
            <Button
              className="bg-blue-500 my-20"
              onClick={() => setOpened((o) => !o)}
            >
              代表からの言葉
            </Button>

            <Collapse in={opened}>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                rerum aut fugiat, distinctio blanditiis voluptatum debitis
                sequi. Illo harum omnis natus vel ullam expedita pariatur
                doloribus dicta, minus iste sit!
              </div>
            </Collapse>
            <div className="my-20 mx-40 text-xl hover:underline hover:text-red-400">
              <Link href="/">外部リンク</Link>
            </div>
          </div>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/Dorf8i6lCuk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
          <h1></h1>
          <h2></h2>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Policy;
