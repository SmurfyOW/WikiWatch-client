import { NavLink } from "react-router-dom";
import Role from "./Rôle/role";

export default function Carte({ heros }) {
  return (
    <div className="w-100 bg-[#ffffff]">
      <div className="flex-col text-left absolute z-3 pl-3 pt-1">
        <button className="w-8 h-8 flex items-center justify-center rounded-full">
          &#9650;
        </button>
        <span className="justify-center flex bg-gray-500 text-neutral-50 rounded my-1">
          127
        </span>
        <button className="w-8 h-8 flex items-center justify-center rounded-full">
          &#9660;
        </button>
        <img src="/étoile.svg" alt="Icône étoile" className="w-auto" />
      </div>

      <img
        src="/placeholder.svg"
        alt="Image Placeholder"
        className="relative rounded-t-lg"
      />

      <div className="px-4 py-4 shadow-x1 shadow-[0_10px_20px_rgba(0,_0,_0,_0.10)] rounded-b-lg">
        <div className="flex align-center justify-between mb-5">
          <h3 className="text-left uppercase text-2xl">{heros.name}</h3>
          <Role text={heros.role} color={heros.color} icon={heros.icon} />
        </div>

        <p className="text-left opacity-50 h-15">{heros.description}</p>

        <NavLink
          to="/"
          className="mt-5 flex justify-center w-full bg-[#2E2E2E] text-[#ffffff] rounded p-1"
        >
          Détails
        </NavLink>
      </div>
    </div>
  );
}
