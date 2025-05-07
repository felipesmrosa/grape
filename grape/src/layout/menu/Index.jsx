import { Link } from "react-router-dom";

export function Menu() {
  return (
    <div className="menu">
      <Link to="/">Início</Link>
      <Link to="/torneios">Torneios</Link>
      <Link to="/suporte">Suporte</Link>
      <Link to="/participe">participe</Link>
    </div>
  );
}
