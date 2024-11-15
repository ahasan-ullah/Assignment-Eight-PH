const CartProduct=({cartList})=>{
  return(
    <div className="flex my-10 border p-10 rounded-2xl gap-10">
      <div>
      <img className="h-36 w-52" src={cartList.product_image} alt="" />
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">{cartList.product_title}</h1>
        <p className="text-xl text-gray-500">{cartList.description}</p>
        <h1 className="text-xl font-semibold">Price: {cartList.price}</h1>
      </div>
    </div>
  );
}
export default CartProduct;