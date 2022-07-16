import Link from "next/link";
import Branch from "./branch";

const Sidevar = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-1/4 sm:text-sm flex justify-between">
          <div className="">最新情報</div>
          <div className="pr-10">
            <Link href="/">
              <a>一覧</a>
            </Link>
          </div>
        </div>
        <div className="h-2/4 bg-lime-300 sm:text-sm">
          事務所紹介
          <Branch />
        </div>
        <div className="h-1/4 bg-blue-400">Pマーク</div>
      </div>
    </>
  );
};
export default Sidevar;
