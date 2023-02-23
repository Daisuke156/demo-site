import Link from "next/link";
import Branch from "./Branch";
import { Card, Image } from "@mantine/core";

const Side2 = () => {
  return (
    <>
      <div className="ml-10 h-[1400px]">
        <div className="mt-10 mb-5">
          <div className="bg-red-600 flex justify-between">
            <div className="text-white py-[6px]">- 最新情報</div>
            <div className="bg-red-700 hover:bg-red-600 text-sm py-[8px] text-white">
              <Link href="/service">一覧を見る→</Link>
            </div>
          </div>
          <div className="my-[5px] py-[5px] px-[10px] border-x-2 border-2 border-y-2">
            <Link href="/service">
              Unix/Windows
              <br />
              サーバオペレーション
            </Link>
          </div>
          <div className="my-[5px] py-[5px] px-[10px] border-x-2 border-2 border-y-2">
            <Link href="/service">
              大型汎用機
              <br />
              オペレーション
            </Link>
          </div>
          <div className="my-[5px] py-[5px] px-[10px] border-x-2 border-2 border-y-2">
            <Link href="/service">システム運用</Link>
          </div>
          <div className="my-[5px] py-[5px] px-[10px] border-x-2 border-2 border-y-2">
            <Link href="/service">運用設計/構築</Link>
          </div>
          <div className="my-[5px] py-[5px] px-[10px] border-x-2 border-2 border-y-2">
            <Link href="/service">サービスデスク</Link>
          </div>
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
          <div className="bg-gray-50 text-red-700 h-[20px]">事務所紹介</div>
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
export default Side2;
