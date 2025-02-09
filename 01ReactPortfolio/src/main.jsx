import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact/Contact.jsx";
import Github from "./Components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "github",
        element: <Github />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
