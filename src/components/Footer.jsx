import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-500 text-2xl">
        <Link href="/">
          <a>作成者について</a>
        </Link>
      </div>
    </>
  );
};

export default Footer;
