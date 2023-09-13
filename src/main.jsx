import React from "react";
import ReactDOM from "react-dom/client";
import { FontStyles } from "./components/FontStyles/FontStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import GlobalStyles from "./components/GlobalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <FontStyles />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
