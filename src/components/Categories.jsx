import { NavLink, useLoaderData } from "react-router-dom";

const Categories = ({category}) => {
  return (
      <div className="col-span-1 flex flex-col gap-5 w-2/3 mx-auto">
        {
          category.map((btn)=><NavLink key={btn.id} className={({isActive})=>`btn ${isActive?'bg-[#9538E2] text-white':''}`} to={`/products/${btn.slug}`}>{btn.btn}</NavLink>)
        }
      </div>
  );
};

export default Categories;