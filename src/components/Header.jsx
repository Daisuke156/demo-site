import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-red-700 border-b-4 border-b-white">
        <div className="text-red-300 text-6xl py-10 px-20 font-bold">
          <Link href="/">Demo Site</Link>
        </div>
        <div className="my-10">
          <div className="text-black bg-white border-2 px-20 mb-5 mr-20">
            電話受付時間:平日9:00〜17:00
          </div>
          <div className="flex">
            <div className="text-white">フリーダイヤル</div>
            <div className="text-white px-20">0120-111-222</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 bg-red-700 text-white">
        <div className="px-10 border-x-2 border-x-black">
          <Link href="/news">最新情報</Link>
        </div>
        <div className="px-10">
          <Link href="/policy">我が社の理念</Link>
        </div>
        <div className="px-10 border-x-2 border-x-black">
          <Link href="/service">業務内容</Link>
        </div>
        <div className="px-10">
          <Link href="/company">会社概要</Link>
        </div>
        <div className="px-10 border-x-2 border-x-black">
          <Link href="/recruit">採用情報</Link>
        </div>
        <div className="px-10 border-r-2 border-r-black">
          <Link href="/contact">お問い合わせ</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
