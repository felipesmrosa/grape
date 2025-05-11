import React from "react";
import { TituloSections } from "./TituloSection";
import { useEffect, useState } from "react";

export function Highlights() {
  const [matchId, setMatchId] = useState(null);

  useEffect(() => {
    fetch("https://grape-api.vercel.app/api/partida")
      .then((res) => res.json())
      .then((data) => {
        setMatchId(data.match_id);
      });
  }, []);

  if (!matchId) return <p>Carregando partida...</p>;

  const faceitMatchUrl = `https://www.faceit.com/en/cs2/room/${matchId}`;

  return (
    <section className="highlights">
      <div className="highlights__container">
        <TituloSections title={"Highlights de Torneios"} />
      </div>
    </section>
  );
}
