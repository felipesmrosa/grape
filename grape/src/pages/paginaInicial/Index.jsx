import { ComoFunciona } from "@/components/ComoFunciona";
import { Highlights } from "@/components/Highlights";
import { Jogos } from "@/components/Jogos";
import React from "react";

export function PaginaInicial() {
  return (
    <div className="conteudo">
      <Jogos />
      {/* <Highlights /> */}
      <ComoFunciona />
    </div>
  );
}
