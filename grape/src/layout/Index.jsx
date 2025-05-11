import { Outlet } from "react-router-dom";
import { Cabecalho } from "./cabecalho/Index";
import { Rodape } from "./rodape/Index";

export function Layout() {
  return (
    <div className="sistema">
      <Cabecalho />

      <main>
        <Outlet />
      </main>

      <Rodape />
    </div>
  );
}
