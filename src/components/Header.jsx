import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <div className="text-red-300 text-4xl bg-red-400">Demo Site</div>
      <div className="flex justify-between bg-green-400 text-4xl">
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
        <div className="mx-5">
          <SignedOut>
            <Link href="/sign-in">Sign in</Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Header;
