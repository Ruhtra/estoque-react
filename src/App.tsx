import { Route, Routes } from "react-router-dom";
import { Index } from "./routes/Index";
import { ProductsRoute } from "./routes/ProductsRoute/ProductsRoute";
import { NavBar } from "./components/NavBar/NavBar";

import "./App.css";
import { HistoryRoute } from "./routes/HistoryRoute/HistoryRoute";
import { RecipeRoute } from "./routes/RecipesRoute/RecipeRoute";

export function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductsRoute />} />
        <Route path="/history" element={<HistoryRoute />} />
        <Route path="/recipe" element={<RecipeRoute />} />
      </Routes>

      <NavBar />
    </>
  )
}