import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
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
        path: "/shop",
        Component: Shop,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
