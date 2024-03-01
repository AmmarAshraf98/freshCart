import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";
import Notfound from "./Components/Notfound/Notfound";
import About from "./Components/Brands/Brands.jsx";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import { useContext, useEffect } from "react";
import { TokenContext } from "./Context/Token";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProtectAuth from "./Components/ProtectAuth/ProtectAuth";
import Wishlist from "./Components/Wishlist/Wishlist.jsx";
import ForgetPass from "./Components/ForgetPass/ForgetPass.jsx";
import VerifyCode from "./Components/VerifyCode/VerifyCode.jsx";
import ResetPass from "./Components/ResetPass/ResetPass.jsx";
import Shipping from "./Components/Shipping/Shipping.jsx";
import Allorders from "./Components/Allorders/Allorders.jsx";
import Brands from "./Components/Brands/Brands.jsx";

function App() {
  let { setToken } = useContext(TokenContext);

  let routes = createBrowserRouter([
    {
      path: "/freshCart/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "categories", element: <Categories /> },
        { path: "brands", element: <Brands /> },
        { path: "contact", element: <Contact /> },
        {
          path: "login",
          element: (
            <ProtectAuth>
              <Login />
            </ProtectAuth>
          ),
        },
        {
          path: "register",
          element: (
            <ProtectAuth>
              <Register />
            </ProtectAuth>
          ),
        },
        {
          path: "forgetpass",
          element: (
            <ProtectAuth>
              <ForgetPass />
            </ProtectAuth>
          ),
        },
        {
          path: "verifycode",
          element: (
            <ProtectAuth>
              <VerifyCode />
            </ProtectAuth>
          ),
        },
        {
          path: "resetPass",
          element: (
            <ProtectAuth>
              <ResetPass />
            </ProtectAuth>
          ),
        },
        {
          path: "shppingaddress",
          element: (
            <ProtectedRoutes>
              <Shipping />
            </ProtectedRoutes>
          ),
        },
        { path: "details/:id", element: <ProductDetails /> },
        {
          path: "cart",
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoutes>
              <Wishlist />
            </ProtectedRoutes>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoutes>
              <Allorders />
            </ProtectedRoutes>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  // check if token is excist in localstorage to save it in context
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"));
    }
  }, []);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
