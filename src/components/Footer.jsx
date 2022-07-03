import Link from "next/link";

const Footer = () => {
  return (
    <>
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
          <Link href="/">
            <a>**の人材育成について</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="posts/recruit">
            <a>採用情報</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/">
            <a>パートナー募集</a>
          </Link>
        </div>
        <div className="px-5 border-r-2 border-r-white">
          <Link href="/">
            <a>個人情報保護方針</a>
          </Link>
        </div>
        <div className="px-5">
          <Link href="/">
            <a>お問合わせ</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
