import { Outlet } from "react-router-dom";
import { Cabecalho } from "./cabecalho/Index";
import { Menu } from "./menu/Index";

export function Layout() {
  return (
    <div>
      <Cabecalho />
      <Menu />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
