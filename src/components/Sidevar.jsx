import Branch from "../pages/posts/branch";

const Sidevar = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-1/3 bg-pink-400">最新情報</div>
        <div></div>
        <div></div>
        <div className="h-1/3 bg-lime-300">
          事務所紹介
          <Branch />
        </div>
        <div className="h-1/3 bg-blue-400">Pマーク</div>
      </div>
    </>
  );
};
export default Sidevar;
