import React, { useEffect, useState } from "react";
import Carte from "../../components/Common/Carte";
import { getBlogsFromApi } from "../../api/blog.api";
import { useOutletContext } from "react-router-dom";

export default function Homepage() {
  const { search } = useOutletContext();
  const [listeHeros, setListeHeros] = useState([]);
  const [filteredHeros, setFilteredHeros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const heros = await getBlogsFromApi();
      setListeHeros(heros);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = listeHeros.filter((hero) =>
      hero.name.toLowerCase().startsWith(search.toLowerCase())
    );

    setFilteredHeros(filtered);
  }, [search, listeHeros]);

  return (
    <div>
      <h1 className="uppercase text-5xl">Tous les héros</h1>
      <p className="opacity-50">
        Découvrez tous les héros d'Overwatch, leurs capacités et créez vos
        compositions d'équipe idéales.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10">
        {filteredHeros.map((heros) => (
          <Carte key={heros._id} heros={heros} />
        ))}
      </div>
    </div>
  );
}
