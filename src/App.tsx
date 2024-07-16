import { Route, Routes } from "react-router-dom";
import { Index } from "./routes/Index";
import { ProductsRoute } from "./routes/ProductsRoute/ProductsRoute";
import { NavBar } from "./components/NavBar/NavBar";

import "./App.css";

export function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductsRoute />} />
      </Routes>

      <NavBar />
    </>
  )
}