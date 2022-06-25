import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="text-2xl py-10 flex justify-center">
        <Link href="/">
          <a>作成者について</a>
        </Link>
      </div>
    </>
  );
};

export default Footer;
