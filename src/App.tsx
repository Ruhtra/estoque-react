import { Route, Routes } from "react-router-dom";
import { Index } from "./routes/Index";
import { Products } from "./routes/Products";
import { NavBar } from "./components/NavBar/NavBar";

import "./App.css";

export function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <NavBar />
    </>
  )
}