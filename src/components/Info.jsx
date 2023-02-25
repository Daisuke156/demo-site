const Info = () => {
  return (
    <>
      <div className="my-[8px] py-5 px-10 border-2 border-red-300 flex justify-between">
        <div>
          <div className="text-xl">株式会社***</div>
          <div>東京事務所(本部)</div>
          <div className="flex">
            <div className="text-sm">〒105-0001</div>
            <div className="mx-5 text-sm">東京都港区***</div>
          </div>
          <div className="flex">
            <div className="font-bold text-red-400">TEL</div>
            <div className="mx-5 text-sm">03-****-****</div>
            <div className="font-bold text-red-400 ml-10">FAX</div>
            <div className="mx-5 text-sm">03-****-****</div>
          </div>
        </div>
        <div className="ml-40 mr-20">
          <h1 className="bg-red-600 text-white px-5">
            電話受付時間:平日9:00-17:00
          </h1>
          <h2 className="text-sm my-[10px]">フリーダイヤル</h2>
          <h3 className="text-2xl">0120-***-***</h3>
        </div>
      </div>
    </>
  );
};
export default Info;
