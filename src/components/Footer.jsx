import Link from "next/link";
import ReturnTopButton from "../components/Totop";

const Footer = () => {
  return (
    <>
      <div className="flex justify-end bg-gray-200 pr-20">
        <ReturnTopButton />
      </div>
      <div className="text-0.5xl text-white py-10 flex justify-center bg-red-700">
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/news">
            <a>最新情報</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/policy">
            <a>**の理念</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/service">
            <a>業務内容</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/company">
            <a>会社概要</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/branch">
            <a>事務所紹介</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/human">
            <a>**の人材育成について</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/recruit">
            <a>採用情報</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/partner">
            <a>パートナー募集</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/personal">
            <a>個人情報保護方針</a>
          </Link>
        </div>
        <div className="px-5">
          <Link href="posts/inqury">
            <a>お問合わせ</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
