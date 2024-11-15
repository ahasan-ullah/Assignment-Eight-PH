import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { TabTitle } from "../utils/TitleFunctions";
import { addToStoredList } from "../utils/LocalStorage";
const ProductDetails = () => {
  TabTitle('Details | Gadget Heaven');
  const data = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [wishListed,setWishListed]=useState(false);

  useEffect(() => {
    const filteredArray = [...data].find((p) => p.product_id === id);
    setProduct(filteredArray);
  }, []);

  const handleButton=(id,btn)=>{
    if(btn==='wish-list'){
      setWishListed(true);
      handleAlert('Product added to wishlist');
    }
    else{
      handleAlert('Product added to cart')
    }
    addToStoredList(id,btn);
  }

  const handleAlert=(val)=>{
    toast.success(val, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div className="bg-[#9538E2] text-white p-10 pb-[300px] relative mb-[300px]">
      <div className="w-3/4 mx-auto space-y-5 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">Product Details</h1>
        <p className="text-lg">
          You can find all the authentic product here. We do value our customers
        </p>
      </div>
      {/* Hero */}
      <div className="hero border bg-white text-black rounded-2xl w-2/3 mx-auto absolute left-60 top-60">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-96 h-56 rounded-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold">{product.product_title}</h1>
            <p className="py-2">Price: ${product.price}</p>
            <p className="border text-[#309C08] border-[#309C08] inline-block rounded-3xl px-3">
              In Stock
            </p>
            <p className="py-2">{product.description}</p>
            <p className="py-2 font-bold">Specification:</p>
            {product.Specification && (
              <ol>
                {product.Specification.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ol>
            )}
            {/* <ol>
              {
                spec.map((p,idx)=><li key={idx}>{p}</li>)
              }
            </ol> */}
            <p className="py-2 font-bold">Rating</p>
            <div className="flex items-center space-x-3">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="inline-block rounded-xl border px-5">
                {product.rating}
              </p>
            </div>
            <div className="flex mt-5 space-x-3">
              <button className="btn bg-[#9538E2] text-white" onClick={()=>handleButton(product.product_id,'cart')}>Add To Cart<FaCartShopping /></button>
              <button onClick={()=>handleButton(product.product_id,'wish-list')} className="btn text-2xl" disabled={wishListed}><CiHeart /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
