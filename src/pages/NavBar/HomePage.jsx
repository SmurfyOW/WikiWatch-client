import React from "react";
import Carte from "../../components/Common/Carte";
import listeHeros from "../../data.js";

export default function Homepage() {
  return (
    <div>
      <h1 className="uppercase text-5xl">Tous les héros</h1>
      <p className="opacity-50">
        Découvrez tous les héros d'Overwatch, leurs capacités et créez vos
        compositions d'équipe idéales.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10">
        {listeHeros.map((heros) => (
          <Carte key={heros.id} heros={heros} className="h-full" />
        ))}
      </div>
    </div>
  );
}
