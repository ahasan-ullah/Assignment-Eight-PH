import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const allProducts = useLoaderData();
  const { products } = useParams();
  const [pdc, setProducts] = useState([]);
  useEffect(() => {
    if (products) {
      const filterdArray = [...allProducts].filter(
        (p) => p.category === products
      );
      setProducts(filterdArray);
    }
    else{
      setProducts(allProducts);
    }
  }, [allProducts, products]);
  return (
    <div className="col-span-5 grid grid-cols-3 gap-10">
      {/* products */}
      {pdc?pdc.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      )):'<h1>No available data</h1>'}
    </div>
  );
};

export default Products;
