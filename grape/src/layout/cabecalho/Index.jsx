import { Menu } from "../menu/Index";
import logo from "../../../public/logo.png";

export function Cabecalho() {
  return (
    <div className="cabecalho">
      <div className="cabecalho__banner">
        <div className="cabecalho__banner__container">
          <div className="cabecalho__banner__container__nav">
            <img src={logo} alt="" />
            <Menu />
          </div>

          <div className="cabecalho__banner__container__conteudo">
            <span>
              <h1>
                Inscreva-se para torneios de eSports online com prêmios em
                dinheiro
              </h1>
              <p>Participe dos jogos mais populares e ganhe muito.</p>
              <button>Participar</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
