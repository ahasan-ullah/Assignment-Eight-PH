import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts=()=>{
  return(
    <div className="container mx-auto">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Outlet */}
      <Outlet></Outlet>
      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}
export default MainLayouts;