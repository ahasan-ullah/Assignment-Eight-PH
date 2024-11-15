import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Products from "../components/Products";
import ProductDetails from "../pages/ProductDetails";
import Statistics from "../pages/Statistics";
import Cart from "../components/Cart";
import WishList from "../components/WishList";
import ErrorPage from "../pages/ErrorPage";
import History from "../pages/History";

const routes=createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader: ()=>fetch('../category-button.json'),
        element: <Home></Home>,
        children: [
          {
            path: '/',
            loader: ()=>fetch('../products.json'),
            element: <Products></Products>
          },
          {
            path: '/products/:products',
            loader: ()=>fetch('../products.json'),
            element: <Products></Products>
          }
        ]
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard',
            loader: ()=>fetch('../products.json'),
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/cart',
            loader: ()=>fetch('../products.json'),
            element: <Cart></Cart>
          },
          {
            path: '/dashboard/wish-list',
            loader: ()=>fetch('../products.json'),
            element: <WishList></WishList>
          },
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/product/:id',
        loader: ()=>fetch('../products.json'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/history',
        loader: ()=>fetch('../products.json'),
        element: <History></History>
      }
    ]
  }
])

export default routes