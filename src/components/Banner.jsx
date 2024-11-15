import { Link } from 'react-router-dom';
import bannerImage from '../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="bg-[#9538E2] text-white rounded-b-2xl p-10 pb-[300px] relative mb-[420px]">
      <div className="w-3/4 mx-auto space-y-5 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className='text-lg'>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link className="btn rounded-3xl text-[#9538E2] px-10 text-lg" to={'/dashboard'}>
        Shop Now</Link>
      </div>
      <div className="p-5 backdrop-blur-3xl rounded-2xl absolute border-2 translate-x-[25%] top-80">
        <img className="h-[600px] rounded-2xl" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
