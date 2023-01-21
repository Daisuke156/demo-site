import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidevar from "../components/Sidevar";
import { Card, Image, Text } from "@mantine/core";

const Home = () => {
  return (
    <>
      <Head>
        <title>Topページ</title>
      </Head>
      <Header />
      <main className="h-full">
        <div className="flex">
          <div className="w-1/6">
            <Sidevar />
          </div>
          <div className="w-5/6">
            <div className="">
              <div className="my-10 mx-10 border-2 border-red-200">
                <div className="text-2xl text-red-500 mx-5 my-5">
                  時空を超えて、
                </div>
                <div className="text-2xl text-red-500 mx-20 my-5">
                  いつまでも続く仲間を創ろう
                </div>
                <div>
                  <div className="">自己の実現による会社の発展</div>
                  <div>個人の意志の総和による会社の推進</div>
                </div>
              </div>
              <div className="text-4xl py-10 px-10 font-bold">業務内容</div>
              <div className="px-10 text-xl">
                ***はシステム構築、運用を主業務としています。
                <br />
                システムエンジニアをやる気のある方を採用募集しております。東京、大阪、名古屋と全国に展開しています。
                <br />
                フリーダイヤル:0120-111-222
              </div>
            </div>
            <div className="flex my-20">
              <div className="mx-10">
                <Card
                  shadow="sm"
                  p="xl"
                  component="a"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      height={160}
                      alt="No way!"
                    />
                  </Card.Section>
                  <Text weight={500} size="lg" mt="md">
                    You&apos;ve won a million dollars in cash!
                  </Text>
                  <Text mt="xs" color="dimmed" size="sm">
                    Please click anywhere on this card to claim your reward,
                    this is not a fraud, trust us
                  </Text>
                </Card>
              </div>
              <div className="mx-10">
                <Card
                  shadow="sm"
                  p="xl"
                  component="a"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      height={160}
                      alt="No way!"
                    />
                  </Card.Section>
                  <Text weight={500} size="lg" mt="md">
                    You&apos;ve won a million dollars in cash!
                  </Text>
                  <Text mt="xs" color="dimmed" size="sm">
                    Please click anywhere on this card to claim your reward,
                    this is not a fraud, trust us
                  </Text>
                </Card>
              </div>
            </div>
            <div className="flex my-20">
              <div className="mx-10">
                <Card
                  shadow="sm"
                  p="xl"
                  component="a"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      height={160}
                      alt="No way!"
                    />
                  </Card.Section>
                  <Text weight={500} size="lg" mt="md">
                    You&apos;ve won a million dollars in cash!
                  </Text>
                  <Text mt="xs" color="dimmed" size="sm">
                    Please click anywhere on this card to claim your reward,
                    this is not a fraud, trust us
                  </Text>
                </Card>
              </div>
              <div className="mx-10">
                <Card
                  shadow="sm"
                  p="xl"
                  component="a"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                      height={160}
                      alt="No way!"
                    />
                  </Card.Section>
                  <Text weight={500} size="lg" mt="md">
                    You&apos;ve won a million dollars in cash!
                  </Text>
                  <Text mt="xs" color="dimmed" size="sm">
                    Please click anywhere on this card to claim your reward,
                    this is not a fraud, trust us
                  </Text>
                </Card>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
