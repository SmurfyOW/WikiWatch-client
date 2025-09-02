import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { userConnected, logout } = useAuth();

  return (
    <header className="bg-white px-6 shadow-md flex flex-row justify-between items-center mb-10">
      <NavLink to="/">
        {/* Logo */}
        <img src="logo.webp" alt="logo WikiWatch" className="w-50" />
      </NavLink>

      {/* Barre de recherche */}
      <div className="flex items-center bg-gray-100 rounded-md py-1 px-2 w-80 ">
        <img src="/loupe.svg" alt="Icône Loupe" className="w-5 mr-2" />
        <input
          type="text"
          placeholder="Rechercher un héros"
          className="flex-1 text-left bg-transparent outline-none placeholder-gray-500 w-full"
        />
      </div>

      {/* Navbar */}
      <nav className="flex space-x-6 items-center">
        <NavLink
          to="/"
          className={
            ({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition
        ${
          isActive
            ? "bg-orange-50 text-orange-500" // actif
            : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
        }` // inactif
          }
        >
          Héros
        </NavLink>
        <NavLink
          to="/TeamBuilder"
          className={
            ({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition
        ${
          isActive
            ? "bg-orange-50 text-orange-500" // actif
            : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
        }` // inactif
          }
        >
          Team Builder
        </NavLink>
        <NavLink
          to="/Profile"
          className={
            ({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md font-medium transition
        ${
          isActive
            ? "bg-orange-50 text-orange-500" // actif
            : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
        }` // inactif
          }
        >
          Profile
        </NavLink>
      </nav>

      {/* Login / Register */}
      <nav className="flex space-x-6 items-center">
        {userConnected ? (
          <>
            <NavLink
              to="/blog"
              className="text-gray-600 hover:text-[#F58220] transition-colors duration-200 font-semibold"
            >
              Blog
            </NavLink>
            <NavLink
              to="/login"
              onClick={logout}
              className="text-gray-600 hover:text-[#F58220] transition-colors duration-200 font-semibold"
            >
              Déconnexion
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/register"
              className="text-gray-600 hover:text-[#F58220] transition-colors duration-200 font-semibold"
            >
              Inscription
            </NavLink>
            <NavLink
              to="/login"
              className="text-[#ffffff] hover:bg-[#F09748] transition-background duration-400 font-semibold bg-[#F58220] rounded-md px-3 py-2"
            >
              Se connecter
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
