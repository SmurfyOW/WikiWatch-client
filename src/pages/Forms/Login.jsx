import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const defaultValues = {
    data: "",
    password: "",
  };

  const schema = yup.object({
    data: yup.string().required("Ce champ est obligatoire"),
    password: yup.string().required("Le mot de passe est obligatoire"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  async function submit(values) {
    // console.log(values);
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      });
      const responseFromBackend = await response.json();
      console.log(responseFromBackend);

      if (response.ok) {
        toast.success("Bien connecté");
        login(responseFromBackend.user);

        navigate("/");
        reset(defaultValues);
      } else {
        toast.error(responseFromBackend.message);
      }
    } catch (error) {
      console.log(error);
    }
    // reset(defaultValues);
    // requete HTTP
  }
  return (
    <div className="w-full max-w-md p-7 align-center shadow-x1 shadow-[0_10px_20px_rgba(0,_0,_0,_0.06)] rounded-b-2xl">
      <form
        className="flex flex-col gap-4 mb-6 mx-auto max-w-[400px]"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col mb-2">
          <label htmlFor="data" className="mb-2 text-left font-semibold">
            Pseudo ou Email
          </label>
          <input
            {...register("data")}
            type="text"
            id="data"
            placeholder="Saisissez votre Pseudo ou Email"
            className="bg-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.data && <p className="text-red-500">{errors.data.message}</p>}
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="password" className="mb-2 text-left font-semibold">
            Mot de passe
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Saisissez votre mot de passe"
            className="bg-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button className="bg-[#F58220] text-[#ffffff] font-semibold px-4 py-2 rounded hover:bg-amber-500 transition-colors duration-200">
          Se connecter
        </button>
        <div className="flex justify-center text-center gap-1">
          <p>Vous n'avez pas de compte ?</p>
          <NavLink to="/register" className="text-blue-500 font-semibold">
            Créer un compte
          </NavLink>
        </div>
      </form>
    </div>
  );
}
