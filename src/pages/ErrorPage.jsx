import { useNavigate } from "react-router-dom";

const ErrorPage=()=>{
  const navigate=useNavigate();
  return(
    <div className="min-h-screen text-center flex flex-col justify-center items-center space-y-12">
      <h1 className="text-6xl font-bold">Error 404</h1>
      <p className="text-3xl">An Error Occured Please Reload the Page</p>
      <button className="btn btn-warning text-2xl px-10" onClick={()=>navigate('/')}>Back</button>
    </div>
  );
}

export default ErrorPage;