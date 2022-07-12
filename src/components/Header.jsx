import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-red-700 border-b-4 border-b-white">
        <div className="text-red-300 text-8xl py-10 px-20">
          <Link href="/">
            <a>Demo Site</a>
          </Link>
        </div>
        <div className="my-10">
          <div className="text-black bg-white border-2 px-20 mb-5 mr-20">
            電話受付時間:平日9:00〜17:00
          </div>
          <div className="flex">
            <div className="text-white">フリーダイヤル</div>
            <div className="text-white">
              <FontAwesomeIcon icon="fa-solid fa-mobile-screen" />
            </div>
            <div className="text-2xl text-white px-10">0120-111-222</div>
            <div className="px-10">
              <SignedOut>
                <Link href="/sign-in">Sign in</Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-2xl py-5 bg-red-700 text-white">
        <div className="px-10 border-x-2  border-x-black">
          <Link href="/news">
            <a>最新情報</a>
          </Link>
        </div>
        <div className="px-10">
          <Link href="/policy">
            <a>**の理念</a>
          </Link>
        </div>
        <div className="px-10 border-x-2 border-x-black">
          <Link href="/service">
            <a>業務内容</a>
          </Link>
        </div>
        <div className="px-10">
          <Link href="/company">
            <a>会社概要</a>
          </Link>
        </div>
        <div className="px-10 border-x-2 border-x-black">
          <Link href="/recruit">
            <a>採用情報</a>
          </Link>
        </div>
        <div className="px-10 border-r-2 border-r-black">
          <Link href="/contact">
            <a>お問い合わせ</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
