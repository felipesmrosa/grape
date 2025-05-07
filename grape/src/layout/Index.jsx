import { Outlet } from "react-router-dom";
import { Cabecalho } from "./cabecalho/Index";

export function Layout() {
  return (
    <div className="sistema">
      <Cabecalho />

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
