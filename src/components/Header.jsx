import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-red-300 text-4xl py-10 px-10">Demo Site</div>
        <div className="px-10 py-10">
          <SignedOut>
            <Link href="/sign-in">Sign in</Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div className="flex justify-between text-2xl py-5 px-10">
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
            <a>採用情報</a>
          </Link>
        </div>
        <div>
          <Link href="posts/contact">
            <a>お問い合わせ</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
