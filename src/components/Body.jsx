import { Card, Image, Text } from "@mantine/core";
import Link from "next/link";

const Body = () => {
  return (
    <>
      <div>
        <div className="my-10 mx-10 border-2 border-red-200">
          <div className="text-2xl text-red-500 mx-5 my-5">時空を超えて、</div>
          <div className="text-2xl text-red-500 mx-20 my-5">
            いつまでも続く仲間を創ろう
          </div>
          <div className="bg-red-100 mx-10 my-5 w-[500px]">
            <div className="text-xl">自己の実現による会社の発展</div>
            <div className="flex">
              <div className="text-xl my-5">
                個人の意志の総和による会社の推進
              </div>
              <div className="bg-red-600 hover:bg-red-500 w-[100px] mt-10 h-[30px] mx-5 text-white text-xl">
                <Link href="/">詳しく見る</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-red-700 mx-10">
          <div className="text-xl text-white h-[30px] px-5 font-bold">
            -業務内容
          </div>
          <div className="text-sm text-white py-[5px] hover:bg-red-600">
            <Link href="/service">一覧を見る →</Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mx-10 py-[5px]">
        <div className="mx-5 py-5 text-sm">
          ITアウトソーシング（ITスキル標準における、ITサービスマネジメント領域）に特化したサービスを展開しています。
        </div>
        <div className="flex my-5">
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
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
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
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
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
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
        </div>
        <div className="flex my-5">
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
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
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
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
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
                Please click anywhere on this card to claim your reward, this is
                not a fraud, trust us
              </Text>
            </Card>
          </div>
        </div>
      </div>
      <div className="my-[8px] py-5 px-10 mx-10 border-2 border-red-100 flex justify-between">
        <div>
          <div className="text-xl">株式会社***</div>
          <div>東京事務所(本部)</div>
          <div className="flex">
            <div className="text-sm">〒105-0001</div>
            <div className="mx-5 text-sm">東京都港区***</div>
          </div>
          <div className="flex">
            <div className="font-bold text-red-400">TEL</div>
            <div className="mx-5 text-sm">03-****-****</div>
            <div className="font-bold text-red-400 ml-10">FAX</div>
            <div className="mx-5 text-sm">03-****-****</div>
          </div>
        </div>
        <div className="mx-40">
          <h1 className="bg-red-600 text-white px-5">
            電話受付時間：平日9:00-17:00
          </h1>
          <h2 className="text-sm my-[10px]">フリーダイヤル</h2>
          <h3 className="text-2xl">0120-**-****</h3>
        </div>
      </div>
      <div className="mx-10 pb-10 text-sm">
        ***はシステム構築、運用を主業務としています。システムエンジニアをやる気のある方を採用募集
        <br />
        しております。東京、名古屋、神戸と全国に展開しています。フリーダイヤル:0120-111-222
      </div>
    </>
  );
};

export default Body;
