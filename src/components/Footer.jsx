import Link from "next/link";
import ReturnTopButton from "../components/Totop";

const Footer = () => {
  return (
    <>
      <div className="flex justify-end bg-gray-200 pr-20 h-[30px]">
        <ReturnTopButton />
      </div>
      <div className="bg-red-700">
        <div className="text-0.5xl sm:text-sm text-white pt-10 flex justify-center">
          <div className="px-5 border-r-2 border-r-white">
            <Link href="/news">最新情報</Link>
          </div>
          <div className="px-5 border-r-2 border-r-white">
            <Link href="/policy">我が社の理念</Link>
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
            <Link href="/human">人材育成について</Link>
          </div>
          <div className="px-5 border-r-2 border-r-white">
            <Link href="/recruit">採用情報</Link>
          </div>
          <div className="px-5 border-r-2 border-r-white">
            <Link href="/partner">パートナー募集</Link>
          </div>
          <div className="px-5 border-r-2 border-r-white">
            <Link href="/">個人情報保護方針</Link>
          </div>
          <div className="px-5">
            <Link href="/contact">お問合わせ</Link>
          </div>
        </div>
        <div className="text-center text-white pt-[5px] pb-5">2022©️</div>
      </div>
    </>
  );
};

export default Footer;
