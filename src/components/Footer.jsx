import Link from "next/link";
import ReturnTopButton from "../components/Totop";

const Footer = () => {
  return (
    <>
      <div className="flex justify-end bg-gray-200 pr-20">
        <ReturnTopButton />
      </div>
      <div className="text-0.5xl sm:text-sm text-white py-10 flex justify-center bg-red-700">
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/news">最新情報</Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/policy">**の理念</Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/service">業務内容</Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/company">会社概要</Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/branch">事務所紹介</Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/human">**の人材育成について</Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/recruit">採用情報</Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/partner">パートナー募集</Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/personal">個人情報保護方針</Link>
        </div>
        <div className="px-5">
          <Link href="/inqury">お問合わせ</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
