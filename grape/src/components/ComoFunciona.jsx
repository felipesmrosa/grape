import React from "react";
import { TituloSections } from "./TituloSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faHeadset,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const comoFunciona = [
  {
    title: "Escolha um torneio",
    icone: faMagnifyingGlass,
    descricao: "Escolha um torneio e faça a inscrição da sua equipe.",
  },
  {
    title: "Participe e Ganhe",
    icone: faHeadset,
    descricao: "Participe do torneio e jogue contra outros jogadores.",
  },
  {
    title: "Ganhe prêmios",
    icone: faHandHoldingDollar,
    descricao: "Ganhe prêmios em dinheiro e mostre seu talento.",
  },
];

export function ComoFunciona() {
  return (
    <section className="comoFunciona">
      <div className="comoFunciona__container">
        <TituloSections title={"Como Funciona?"} />

        <div className="comoFunciona__container__colunas">
          {comoFunciona.map((item, index) => (
            <div className="comoFunciona__container__colunas__card" key={index}>
              <span className="comoFunciona__container__colunas__card--icon">
                <FontAwesomeIcon icon={item.icone} />
              </span>
              <h2>{item.title}</h2>
              <p>{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
