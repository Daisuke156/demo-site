import Link from "next/link";
import Branch from "./branch";

const Sidevar2 = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-1/4 flex justify-between">
          <div className="">業務内容</div>
          <div className="">
            <Link href="/">
              <a>一覧を見る</a>
            </Link>
          </div>
        </div>
        <div className="h-2/4 bg-lime-300">
          事務所紹介
          <Branch />
        </div>
        <div className="h-1/4 bg-blue-400">Pマーク</div>
      </div>
    </>
  );
};
export default Sidevar2;
