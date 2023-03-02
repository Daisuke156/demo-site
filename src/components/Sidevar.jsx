import Link from "next/link";
import Branch from "./Branch";
import { Card, Image } from "@mantine/core";
import News from "./News";

const Sidevar = () => {
  return (
    <>
      <div className="ml-10 h-[1400px]">
        <div className="border-2 border-red-100 mt-10 mb-5">
          <div className="bg-red-600 flex justify-between">
            <div className="text-white py-[6px]">- 最新情報</div>
            <div className="bg-red-700 hover:bg-red-600 text-sm py-[8px] text-white">
              <Link href="/news">一覧→</Link>
            </div>
          </div>
          <News />
        </div>
        <div className="mb-5">
          <div>リクルート</div>
          <div>
            <Link href="/human">**の人材育成について</Link>
          </div>
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
        <div className="my-5">
          <div>
            <Link href="/partner">パートナー募集</Link>
          </div>
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
        <div className="sm:text-sm my-5 border-2 border-red-50">
          <div className="bg-gray-50 text-red-700 h-[20px]">
            <Link href="/branch">事務所紹介</Link>
          </div>
          <Branch />
        </div>
        <div>
          <div className="text-sm font-bold">Pマーク</div>
          <div>
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
      </div>
    </>
  );
};
export default Sidevar;
