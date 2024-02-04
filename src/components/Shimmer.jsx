
const Shimmer = () => {
  return (
    <div className="animate-pulse">
    <div
      className="w-full h-[395px]  animate-pulse bg-zinc-500  text-white flex flex-col justify-end items-start "
      style={{background:'linear-gradient(rgb(244, 244, 244.0.4)),rgb(244, 244, 244,0.7)),rgb(244, 244, 244))'}}
    ></div>
    <div className="w-full h-14 bg-zinc-800 mt-3">

    </div>
    <div className="flex gap-3 mt-3">
    <div className="h-60 w-64  bg-zinc-700"></div>
    <div className="h-60 w-64 bg-zinc-700"></div>
    <div className="h-60 w-64 bg-zinc-700"></div>
    <div className="h-60 w-64 bg-zinc-700"></div>
    <div className="h-60 w-64 bg-zinc-700"></div>
    </div>
    </div>
  )
}

export default Shimmer