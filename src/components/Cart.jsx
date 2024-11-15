import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import image from "../assets/Group.png";
import {
  addToPurchaseList,
  clearStoredList,
  getStoredList,
} from "../utils/LocalStorage";
import CartProduct from "./CartProduct";

const Cart = () => {
  const allProducts = useLoaderData();
  const [cartList, setCartList] = useState([]);
  const [price, setPrice] = useState("");
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let p = 0;
    cartList.map((lst) => (p += lst.price));
    setPrice(p.toFixed(2));
    if (cartList.length == 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [cartList]);

  useEffect(() => {
    const listId = getStoredList("cart");
    const storedList = listId.map((id,idx) =>
      allProducts.find((product) => product.product_id === id)
    );
    setCartList(storedList);
  }, []);

  const handleSortBtn = () => {
    const sortedList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedList);
  };

  const handlePurchaseBtn = () => {
    addToPurchaseList(cartList);
    clearStoredList("cart");
  };

  return (
    <div className="w-4/5 mx-auto my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cart: {cartList.length}</h1>
        <div className="flex gap-5 items-center">
          <h1 className="text-2xl font-bold">Total Price: {price}</h1>
          <button
            className="btn px-5 text-xl hover:bg-purple-600 hover:text-white rounded-3xl"
            onClick={handleSortBtn}
          >
            Sort by Price
          </button>
          <button
            disabled={disable}
            className="btn px-5 text-xl hover:bg-purple-600 hover:text-white rounded-3xl"
            onClick={() => {
              document.getElementById("purchase").showModal();
              handlePurchaseBtn();
            }}
          >
            Purchase
          </button>
        </div>
      </div>
      <div>
        {cartList.map((lst,idx) => (
          <CartProduct key={idx} cartList={lst}></CartProduct>
        ))}
      </div>
      {/* modal */}
      <dialog id="purchase" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center space-y-5">
          <div className="flex justify-center">
            <img src={image} alt="" />
          </div>
          <h3 className="font-bold text-2xl">Payment Successfully</h3>
          <p className="text-lg">Thank You for purchasing</p>
          <p className="text-lg">Total: {price}</p>
          <div className="modal-action justify-center">
            <form method="dialog">
              <button className="btn" onClick={() => navigate("/")}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
