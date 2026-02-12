import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyAcount from "./pages/MyAcount";
import Bill from "./pages/Bill";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";
import AddressBook from "./pages/AddressBook";
import PaymentOptions from "./pages/PaymentOptions";
import MyReturns from "./pages/MyReturns";
import MyCancellations from "./pages/MyCancellations";
import Orders from "./pages/Orders";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/shop",
        Component: Shop,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/checkout",
        Component: Checkout,
      },
      {
        path: "/bill",
        Component: Bill,
      },
      {
        path: "/account",
        Component: MyAcount,
        children: [
          {
            index: true,
            Component: Profile,
          },
          {
            path: "/account/address",
            Component: AddressBook,
          },
          {
            path: "/account/payment-options",
            Component: PaymentOptions,
          },
          {
            path: "/account/my-orders",
            Component: Orders,
          },
          {
            path: "/account/returns",
            Component: MyReturns,
          },
          {
            path: "/account/cancellations",
            Component: MyCancellations,
          },
        ],
      },
      {
        path: "/products/:id",
        Component: ProductDetails,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
