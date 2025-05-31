import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "items", element: <Items /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
