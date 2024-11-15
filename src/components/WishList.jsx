import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredList,
} from "../utils/LocalStorage";
import CartProduct from "./CartProduct";

const WishList = () => {
  const allProducts = useLoaderData();
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const listId = getStoredList("wish-list");
    const storedList = allProducts.filter((product) =>
      listId.includes(product.product_id)
    );
    setWishList(storedList);
  }, []);

  return (
    <div className="w-4/5 mx-auto my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Wislist: {wishList.length}</h1>
      </div>
      <div>
        {wishList.map((lst) => (
          <CartProduct key={lst.product_id} cartList={lst}></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default WishList;
