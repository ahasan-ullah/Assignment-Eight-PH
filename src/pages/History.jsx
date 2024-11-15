import HistoryBanner from "../components/HistoryBanner";
import HistoryCards from "../components/HistoryCards";
import { useLoaderData } from "react-router-dom";
import { TabTitle } from "../utils/TitleFunctions";

const History = () => {
  TabTitle('Historygit | Gadget Heaven');
  const allProducts = useLoaderData();
  return (
    <div>
      <HistoryBanner></HistoryBanner>
      <HistoryCards allProducts={allProducts}></HistoryCards>
    </div>
  );
};

export default History;