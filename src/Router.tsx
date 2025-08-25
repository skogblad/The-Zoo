import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { Home } from "./pages/Home";
import { Animal } from "./pages/Animal";
import { AnimalApp } from "./pages/AnimalApp";
import { animalLoader } from "./loaders/animalLoader";

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