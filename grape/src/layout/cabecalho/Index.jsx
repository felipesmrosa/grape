import { Menu } from "../menu/Index";
import logo from "../../../public/logo50.png";

export function Cabecalho() {
  return (
    <div className="cabecalho">
      <div className="cabecalho__banner">
        <div className="cabecalho__banner__container">
          <img src={logo} alt="" />
          <Menu />
        </div>
      </div>
    </div>
  );
}
