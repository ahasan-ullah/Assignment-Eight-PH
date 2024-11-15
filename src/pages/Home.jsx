import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { useLoaderData } from "react-router-dom";
import { TabTitle } from "../utils/TitleFunctions";
const Home = () => {
  TabTitle('Home | Gadget Heaven');
  const category = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-4xl text-center font-bold py-5">Explore Cutting-Edge Gadgets</h1>
      <div className="grid grid-cols-6 gap-10 my-12">
        <Categories category={category}></Categories>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
