const DetailPage = () => {
  return (
    <div
      className="w-screen h-screen  animate-pulse  flex flex-col justify-end items-start "
      style={{
        background:
          "linear-gradient(rgb(244, 244, 244.0.4)),rgb(244, 244, 244,0.7)),rgb(244, 244, 244))",
      }}
    >
      <div className=" h-[500px] flex gap-8 w-full px-20 mb-10">
        <div className="h-[400px] w-64 bg-zinc-600 rounded-lg animate-pulse"></div>
        <div className="flex flex-col gap-6 pt-4" >
          <div className="w-[600px] h-10 rounded-md animate-pulse bg-zinc-700"></div>
          <div className=" h-6  flex gap-6 ">
            <div className="w-20 rounded-full py-4 bg-zinc-700 animate-pulse"></div>
            <div className="w-20 rounded-full py-4 bg-zinc-700 animate-pulse"></div>
            <div className="w-20 rounded-full py-4 bg-zinc-700 animate-pulse"></div>
            <div className="w-20 rounded-full py-4 bg-zinc-700 animate-pulse"></div>
            <div className="w-20 rounded-full py-4 bg-zinc-700 animate-pulse"></div>
          </div>

          <div className="w-48 h-6 animate-pulse rounded-md bg-zinc-700"></div>
          <div className="w-[400px] h-16 animate-pulse rounded-lg bg-zinc-700"></div>
          <div className="w-32 h-10 animate-pulse border-2 border-zinc-700 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
