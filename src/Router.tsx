import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Home } from "./pages/Home";
import { Animal } from "./pages/Animal";
import { AnimalApp } from "./pages/AnimalApp";
import { animalLoader } from "./loaders/animalLoader";
import { Error } from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/animals",
        element: <AnimalApp />
      },
      {
        path: "/animal/:id",
        loader: animalLoader,
        element: <Animal />
      }
    ],
  },
]);