import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="text-0.5xl text-white py-10 flex justify-center bg-red-700">
        <div>
          <Link href="posts/news">
            <a>最新情報</a>
          </Link>
        </div>
        <div>
          <Link href="posts/policy">
            <a>**の理念</a>
          </Link>
        </div>
        <div>
          <Link href="posts/service">
            <a>業務内容</a>
          </Link>
        </div>
        <div>
          <Link href="posts/company">
            <a>会社概要</a>
          </Link>
        </div>
        <div>
          <Link href="posts/recruit">
            <a>事務所紹介</a>
          </Link>
        </div>
        <div>
          <Link href="posts/contact">
            <a>**の人材育成について</a>
          </Link>
        </div>
        <div>
          <Link href="posts/recruit">
            <a>採用情報</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>パートナー募集</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>個人情報保護方針</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>お問合わせ</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
