import Link from "next/link";

const Branch = () => {
  return (
    <>
      <div>
        <Link href="/">
          <a>東京本社</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>大阪支店</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>神戸支店</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>名古屋支店</a>
        </Link>
      </div>
    </>
  );
};
export default Branch;
