import Root from "../pages/client/Root.jsx";
import Home from "../pages/client/Home.jsx";
import Favorites from "../pages/client/Favorites.jsx";
import Contact from "../pages/client/Contact.jsx";
import Cart from "../pages/client/Cart.jsx";
import AdminRoot from "../pages/admin/AdminRoot.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";
import Products from "../pages/admin/Products.jsx";
import { Detail } from "../pages/client/Detail.jsx";

const ROUTES = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "admin/products",
        element: <Products />,
      },
    ],
  },
];

export default ROUTES;
