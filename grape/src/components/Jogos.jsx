import cs2 from "@/assets/images/cs2.jpeg";
import valorant from "@/assets/images/va1.jpeg";
import warzone from "@/assets/images/war.jpeg";
import rocketLeague from "@/assets/images/rocket.webp";
import apex from "@/assets/images/apex.jpg";
import lol from "@/assets/images/lol.png";
import fifa from "@/assets/images/fifa.avif";

import bannerCs2 from "@/assets/images/banner_cs2.webp";
import bannerValorant from "@/assets/images/banner_valorant.png";
import bannerWarzone from "@/assets/images/banner_warzone.jpg";
import bannerRocketLeague from "@/assets/images/banner_rocketleague.avif";
import bannerApex from "@/assets/images/banner_apex.jpg";
import bannerLol from "@/assets/images/banner_lol.webp";
import bannerFifa from "@/assets/images/banner_fifa.jpg";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { TituloSections } from "./TituloSection";
import { ModalJogos } from "./ModalJogos";

const jogos = [
  {
    image: cs2,
    banner: bannerCs2,
    nome: "Counter Strike 2",
    emBreve: false,
    premio: "R$10.000",
    inscricao: "Gratuita",
    equipe: 16,
    data: "12/05/2025 - 15h",
  },
  {
    image: valorant,
    banner: bannerValorant,
    nome: "Valorant",
    emBreve: false,
    premio: "R$10.000",
    inscricao: "Gratuita",
    equipe: 16,
    data: "12/05/2025 - 15h",
  },
  {
    image: warzone,
    banner: bannerWarzone,
    nome: "COD: Warzone",
    emBreve: false,
    premio: "R$10.000",
    inscricao: "Gratuita",
    equipe: 16,
    data: "12/05/2025 - 15h",
  },
  {
    image: rocketLeague,
    banner: bannerRocketLeague,
    nome: "Rocket League",
    emBreve: false,
    premio: "R$10.000",
    inscricao: "Gratuita",
    equipe: 16,
    data: "12/05/2025 - 15h",
  },
  {
    image: apex,
    banner: bannerApex,
    nome: "Apex Legends",
    emBreve: false,
    premio: "R$3.000",
    inscricao: "R$50,00",
    equipe: 16,
    data: "12/05/2025 - 15h",
  },
  {
    image: lol,
    banner: bannerLol,
    nome: "League of Legends",
    emBreve: false,
    premio: "R$10.000",
    inscricao: "Gratuita",
    equipe: 16,
    data: "12/05/2025 - 15h",
  },
  {
    image: fifa,
    banner: bannerFifa,
    nome: "FIFA 2025",
    emBreve: false,
    premio: "R$10.000",
    inscricao: "Gratuita",
    equipe: 16,
    data: "12/05/2025 - 15h",
  },
];

export function Jogos() {
  const gridRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [jogoSelecionado, setJogoSelecionado] = useState(null);

  const abrirModal = (jogo) => {
    setJogoSelecionado(jogo);
    setModalOpen(true);
  };
  const fecharModal = () => {
    setModalOpen(false);
    setJogoSelecionado(null);
  };
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
                      <button
                        onClick={() => abrirModal(jogo)}
                        className="jogos__container__carousel__grid__wrapper__card__content__button"
                      >
                        Participar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {modalOpen && jogoSelecionado && (
            <ModalJogos
              jogoSelecionado={jogoSelecionado}
              fecharModal={fecharModal}
            />
          )}

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
