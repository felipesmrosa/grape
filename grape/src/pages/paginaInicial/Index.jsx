import c2 from "@/assets/images/cs2.jpeg";
import valorant from "@/assets/images/va1.jpeg";
import warzone from "@/assets/images/war.jpeg";

const jogos = [
  {
    image: c2,
    nome: "Counter Strike 2",
    emBreve: false,
  },
  {
    image: valorant,
    nome: "Valorant",
    emBreve: false,
  },
  {
    image: warzone,
    nome: "COD: Warzone",
    emBreve: true,
  },
];

export function PaginaInicial() {
  return (
    <section className="jogos">
      <div className="jogos__container">
        <h2 className="jogos__title">Torneios</h2>

        <div className="jogos__grid">
          {jogos.map((jogo, index) => (
            <div
              className={`jogos__card ${
                jogo.emBreve ? "jogos__card--embreve" : ""
              }`}
              key={index}
              style={{ backgroundImage: `url(${jogo.image})` }}
            >
              <div className="jogos__card__content">
                <h3 className="jogos__card__title">{jogo.nome}</h3>

                {jogo.emBreve ? (
                  <span className="jogos__card__tag">Em breve</span>
                ) : (
                  <button className="jogos__card__button">Participar</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
