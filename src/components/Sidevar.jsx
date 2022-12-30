import Link from "next/link";
import Branch from "./branch";

const Sidevar = () => {
  return (
    <>
      <div className="h-full">
        <div className="h-1/4 sm:text-sm text-2xl flex justify-between bg-gray-200">
          <div className="font-bold">最新情報</div>
          <div className="pr-10">
            <Link href="/">一覧</Link>
          </div>
        </div>
        <div className="h-2/4 bg-lime-300 sm:text-sm">
          <div className="font-bold text-xl">事務所紹介</div>
          <Branch />
        </div>
        <div className="h-1/4 bg-blue-400">Pマーク</div>
      </div>
    </>
  );
};
export default Sidevar;
