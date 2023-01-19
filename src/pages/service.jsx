import { Card, Image } from "@mantine/core";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidevar from "../components/sidevar";

const Service = () => {
  return (
    <>
      <Head>
        <title>業務内容</title>
      </Head>
      <Header />
      <div className="flex bg-lime-100 h-full pb-40">
        <div className="w-1/6">
          <Sidevar />
        </div>
        <div className="w-5/6 py-10 px-20">
          <div className="mb-10 text-4xl font-bold">業務内容</div>
          <div className="flex justify-evenly">
            <div>
              <div className="my-5 text-2xl">開発</div>
              <h1 className="text-xl">
                フロントエンド・バックエンドエンジニア
              </h1>
              <h2 className="mt-5">使用言語</h2>
              <div className="mx-5 my-5">
                <li>JavaScript</li>
                <li>PHP</li>
                <li>GraphQL</li>
              </div>
              <h3 className="mb-10">
                主に自社内で、受託開発を行なっています。
              </h3>
              <div>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                      height={250}
                      alt="Norway"
                    />
                  </Card.Section>
                </Card>
              </div>
            </div>
            <div>
              <div className="my-5 text-2xl">業務系</div>
              <h1 className="text-xl">業務システム構築・保守</h1>
              <h2 className="mt-5">使用言語</h2>
              <div className="mx-5 mt-5 mb-10">
                <li>Java</li>
                <li>C#</li>
              </div>
              <h3 className="mb-10">
                お客様先に常駐し、システム構築をメインに行なっています
              </h3>
              <div>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                      height={250}
                      alt="Norway"
                    />
                  </Card.Section>
                </Card>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="mx-10">
              <div className="my-10 text-2xl">ヘルプデスク</div>
              <h1 className="text-xl">ヘルプデスク業務</h1>
              <h2 className="mt-5"></h2>
              <h3 className="mb-10">
                お客様先に常駐し、キッティングやお客様からの依頼対応を行います。
              </h3>
              <div>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                      height={250}
                      alt="Norway"
                    />
                  </Card.Section>
                </Card>
              </div>
            </div>
            <div>
              <div className="my-10 text-2xl">オペレータ</div>
              <h1 className="text-xl">オペレータ業務</h1>
              <h2 className="mt-5"></h2>
              <h3 className="mb-10">
                お客様先に常駐し、指示書に従いサーバやマシンの運用・監視を行います。
              </h3>
              <div>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                      height={250}
                      alt="Norway"
                    />
                  </Card.Section>
                </Card>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Service;
