import cs2 from "@/assets/images/cs2.jpeg";
import valorant from "@/assets/images/va1.jpeg";
import warzone from "@/assets/images/war.jpeg";
import rocketLeague from "@/assets/images/rocket.webp";
import apex from "@/assets/images/apex.jpg";
import lol from "@/assets/images/lol.png";
import fifa from "@/assets/images/fifa.avif";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { TituloSections } from "./TituloSection";

const jogos = [
  {
    image: cs2,
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
  {
    image: rocketLeague,
    nome: "Rocket League",
    emBreve: false,
  },
  {
    image: apex,
    nome: "Apex Legends",
    emBreve: false,
  },
  {
    image: lol,
    nome: "League of Legends",
    emBreve: false,
  },
  {
    image: fifa,
    nome: "FIFA 2025",
    emBreve: false,
  },
];

export function Jogos() {
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
        <TituloSections title={"Torneios"} />

        <div className="jogos__container__carousel">
          <button
            className="jogos__container__carousel__arrow jogos__container__carousel__arrow--left"
            onClick={() => scroll("left")}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="jogos__container__carousel__grid" ref={gridRef}>
            {jogos.map((jogo, index) => (
              <div
                className="jogos__container__carousel__grid__wrapper"
                key={index}
              >
                {jogo.emBreve && (
                  <span className="jogos__container__carousel__grid__wrapper__ribbon">
                    Em Breve
                  </span>
                )}

                <div
                  className={`jogos__container__carousel__grid__wrapper__card ${
                    jogo.emBreve
                      ? "jogos__container__carousel__grid__wrapper__card--embreve"
                      : ""
                  }`}
                  style={{ backgroundImage: `url(${jogo.image})` }}
                >
                  <div className="jogos__container__carousel__grid__wrapper__card__content">
                    <h3 className="jogos__container__carousel__grid__wrapper__card__content__title">
                      {jogo.nome}
                    </h3>
                    {jogo.emBreve ? (
                      <span className="jogos__container__carousel__grid__wrapper__card__content__tag">
                        Em breve
                      </span>
                    ) : (
                      <button className="jogos__container__carousel__grid__wrapper__card__content__button">
                        Participar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="jogos__container__carousel__arrow jogos__container__carousel__arrow--right"
            onClick={() => scroll("right")}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
