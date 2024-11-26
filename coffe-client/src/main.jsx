import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddCoffe from "./components/AddCoffe";
import UpdateCoffe from "./components/UpdateCoffe";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addCoffee",
    element: <AddCoffe />,
  },
  {
    path: "/updateCoffee",
    element: <UpdateCoffe />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
