import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Entries from "./pages/Entries";
import Insights from "./pages/Insights";
import NewEntry from "./pages/NewEntry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/entries", element: <Entries /> },
      { path: "/entries/new/:id", element: <NewEntry /> },
      { path: "/insights", element: <Insights /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
