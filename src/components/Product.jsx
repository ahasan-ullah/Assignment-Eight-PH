import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate=useNavigate();
  return (
    <div className="card bg-base-100 w-96 border">
      <figure className="px-6 pt-6">
        <img
          src={product.product_image}
          alt={product.product_title}
          className="w-96 h-56"
        />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title">{product.product_title}</h2>
        <p className="text-lg text-gray-400">Price: {product.price}</p>
        <div className="card-actions">
          <button onClick={()=>navigate(`/product/${product.product_id}`)} className="btn border bg-transparent rounded-3xl text-[#9538E2]">View Details</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
