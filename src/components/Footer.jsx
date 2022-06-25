import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-500 text-2xl py-20 flex justify-center">
        <Link href="/">
          <a>作成者について</a>
        </Link>
      </div>
    </>
  );
};

export default Footer;
