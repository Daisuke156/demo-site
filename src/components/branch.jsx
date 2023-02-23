import Link from "next/link";

const Branch = () => {
  return (
    <>
      <div>
        <div className="bg-red-100 mx-[5px] pl-[5px]">
          <Link href="/office/Tokyo">東京事務所(本部)</Link>
        </div>
        <div className="mx-[10px]">
          <h1>〒105-0001</h1>
          <h2>東京都港区***</h2>
          <h3>TEL:03-1111-2222(代)</h3>
        </div>
      </div>
      <div className="my-5">
        <div className="bg-red-100 mx-[5px] pl-[5px]">
          <Link href="/office/Osaka">大阪事務所</Link>
        </div>
        <div className="mx-[10px]">
          <h1>〒562-0002</h1>
          <h2>大阪府大阪市中央区***</h2>
          <h3>TEL:06-1111-2222</h3>
        </div>
      </div>
      <div className="mb-5">
        <div className="bg-red-100 mx-[5px] pl-[5px]">
          <Link href="/office/Nagoya">名古屋事務所</Link>
        </div>
        <div className="mx-[10px]">
          <h1>〒460-0003</h1>
          <h2>愛知県名古屋市中村区***</h2>
          <h3>TEL:052-111-2222</h3>
        </div>
      </div>
    </>
  );
};
export default Branch;
