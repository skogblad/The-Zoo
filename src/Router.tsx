import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/animals",
        element: <Animals />
      },
    ],
  },
]);