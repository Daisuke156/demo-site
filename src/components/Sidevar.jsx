import Link from "next/link";
import Branch from "./Branch";
import { Card, Image } from "@mantine/core";
import News from "./News";

const Sidevar = () => {
  return (
    <>
      <div className="h-full">
        <div className="bg-gray-200">
          <div className="h-1/5 sm:text-sm text-2xl flex justify-between">
            <div className="font-bold">最新情報</div>
            <div className="pr-10">
              <Link href="/">一覧</Link>
            </div>
          </div>
          <News />
        </div>
        <div className="h-3/5 bg-lime-300 sm:text-sm">
          <div className="font-bold text-xl">事務所紹介</div>
          <Branch />
        </div>
        <div className="h-1/5">
          <div className="text-sm font-bold">Pマーク</div>
          <div>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  height={100}
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
