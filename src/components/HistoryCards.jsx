import { useEffect, useState } from "react";
import {
  getStoredList,
} from "../utils/LocalStorage";
import CartProduct from "./CartProduct";

const HistoryCards = ({allProducts}) => {
  const [purchaseList, setPurchaseList] = useState([]);

  useEffect(() => {
    const listId = getStoredList("purchase");
    // const storedList = listId.map((id) => 
    //   allProducts.find((product) => product.product_id === id)
    // );
    const storedList=listId.map((id)=>allProducts.find((product)=>product.product_id==id));
    setPurchaseList(storedList);
  }, []);

  return (
    <div className="w-4/5 mx-auto my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Total Purchase: {purchaseList.length}</h1>
      </div>
      <div>
        {purchaseList.map((lst,idx) => (
          <CartProduct key={idx} cartList={lst}></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default HistoryCards;
