import Link from "next/link";

const Branch = () => {
  return (
    <>
      <div>
        <Link href="/office/Tokyo">東京事務所(本部)</Link>
        <h1>〒105-0000</h1>
        <h2>東京都＊＊区</h2>
        <h3>03-1111-2222(代)</h3>
      </div>
      <div>
        <Link href="/office/Osaka">大阪事務所</Link>
        <h1>〒562-0000</h1>
        <h2>大阪府大阪市＊＊区</h2>
        <h3>06-1111-2222</h3>
      </div>
      <div>
        <Link href="/office/Nagoya">名古屋事務所</Link>
        <h1>〒460-0000</h1>
        <h2>愛知県名古屋市＊＊区</h2>
        <h3>052-111-2222</h3>
      </div>
    </>
  );
};
export default Branch;
