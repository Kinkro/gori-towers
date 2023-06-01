import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import {  Route } from "react-router";
import HeroPage from "./components/Hero/HeroPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<HeroPage />} />
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
      
  </React.StrictMode>
);
