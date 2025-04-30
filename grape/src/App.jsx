import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Index";
import { PaginaInicial } from "./pages/paginaInicial/Index";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PaginaInicial />} />
      </Route>
    </Routes>
  );
}
