import SideNav from "./partials/SideNav"
import TopNav from "./partials/TopNav"

const Home = () => {
    document.title="Cinova - Home"
  return (
    <>
        <SideNav />
    <div className="w-5/6 h-full ">
      <TopNav />
    </div>
    </>
  )
}

export default Home