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
      <main className="h-full bg-red-100">
        <div className="flex">
          <div className="w-1/6">
            <Sidevar />
          </div>
          <div className="w-5/6">
            <div className="bg-red-100">
              <div className="text-4xl py-10 px-10 font-bold">業務内容</div>
              <div className="px-10 text-xl">
                ***はシステム構築、運用を主業務としています。
                <br />
                システムエンジニアをやる気のある方を採用募集しております。東京、名古屋、大阪と全国に展開しています。
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
