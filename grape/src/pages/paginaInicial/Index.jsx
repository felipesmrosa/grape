import cs2 from "@/assets/images/cs2.jpeg";
import valorant from "@/assets/images/va1.jpeg";
import warzone from "@/assets/images/war.jpeg";
import rocketLeague from "@/assets/images/rocket.png";
import apex from "@/assets/images/apex.png";
import lol from "@/assets/images/lol.avif";
import fifa from "@/assets/images/fifa.avif";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const jogos = [
  {
    image: cs2,
    nome: "Counter Strike 2",
    emBreve: false,
  },
  {
    image: valorant,
    nome: "Valorant",
    emBreve: true,
  },
  {
    image: warzone,
    nome: "COD: Warzone",
    emBreve: true,
  },
  {
    image: rocketLeague,
    nome: "Rocket League",
    emBreve: true,
  },
  {
    image: apex,
    nome: "Apex Legends",
    emBreve: true,
  },
  {
    image: lol,
    nome: "League of Legends",
    emBreve: true,
  },
  {
    image: fifa,
    nome: "FIFA 2025",
    emBreve: true,
  },
];

export function PaginaInicial() {
  const gridRef = useRef(null);

  const scroll = (direction) => {
    const container = gridRef.current;
    const scrollAmount = 300;

    if (container) {
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="jogos">
      <div className="jogos__container">
        <h2 className="jogos__title">
          <FontAwesomeIcon
            icon={faTrophy}
            size="lg"
            style={{ color: "#e6b919" }}
          />
          Torneios
        </h2>

        <div className="jogos__carousel">
          <button
            className="jogos__arrow jogos__arrow--left"
            onClick={() => scroll("left")}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="jogos__grid" ref={gridRef}>
            {jogos.map((jogo, index) => (
              <div className="jogos__wrapper" key={index}>
                {jogo.emBreve && (
                  <span className="jogos__ribbon">Em Breve</span>
                )}

                <div
                  className={`jogos__card ${
                    jogo.emBreve ? "jogos__card--embreve" : ""
                  }`}
                  style={{ backgroundImage: `url(${jogo.image})` }}
                >
                  <div className="jogos__card__content">
                    <h3 className="jogos__card__title">{jogo.nome}</h3>
                    {jogo.emBreve ? (
                      <span className="jogos__card__tag">Em breve</span>
                    ) : (
                      <button className="jogos__card__button">
                        Participar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="jogos__arrow jogos__arrow--right"
            onClick={() => scroll("right")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
