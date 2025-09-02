import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signUp } from "../../api/auth.api";

export default function Register() {
  const navigate = useNavigate();

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
  };

  const schema = yup.object({
    username: yup.string().required("Ce champ est obligatoire"),
    email: yup
      .string()
      .email()
      .required("Le champ est obligatoire")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Format email non valide"),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(5, "Trop court")
      .max(10, "trop long"),
    confirmPassword: yup
      .string()
      .required("La confirmation de mot de passe est obligatoire")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passe ne correspondent pas"
      ),
    rgpd: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les termes et conditions"),
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
    try {
      const responseFromBackend = await signUp(values);
      if (responseFromBackend.message !== "Déjà inscrit") {
        toast.success(responseFromBackend.message);
        navigate("/login");
        reset(defaultValues);
      } else {
        toast.error(responseFromBackend.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full max-w-md p-6 bg-white shadow-x1 shadow-[0_10px_20px_rgba(0,_0,_0,_0.06)] rounded-b-2xl">
      <form
        className="flex flex-col gap-4 mb-6 mx-auto max-w-[400px]"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col mb-2">
          <label htmlFor="username" className="mb-2 text-left font-semibold">
            Pseudo
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            placeholder="Saisissez votre pseudo.."
            className="bg-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="mb-2 text-left font-semibold">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Saisissez votre email.."
            className="bg-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="password" className="mb-2 text-left font-semibold">
            Mot de passe
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Saisissez votre mot de passe.."
            className="bg-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-2">
          <label
            htmlFor="confirmPassword"
            className="mb-2 text-left font-semibold"
          >
            Confirmation du mot de passe
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            placeholder="Confirmez votre mot de passe .."
            className="bg-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="rgpd" className="mb-2">
            <input
              {...register("rgpd")}
              type="checkbox"
              className="mr-4"
              id="rgpd"
            />
            En soumettant ce formulaire, j'accepte ...
          </label>
          {errors.rgpd && <p className="text-red-500">{errors.rgpd.message}</p>}
        </div>
        <div className="flex justify-center text-center gap-1">
          <p>Déjà inscrit ?</p>
          <NavLink to="/login" className="text-blue-500">
            Se connecter
          </NavLink>
        </div>
        <button className="bg-[#F58220] text-[#ffffff] font-semibold px-4 py-2 rounded hover:bg-amber-500 transition-colors duration-200">
          Submit
        </button>
      </form>
    </div>
  );
}
