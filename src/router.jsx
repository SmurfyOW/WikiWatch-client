import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/NavBar/Homepage";
import Blog from "./pages/Blog/Blog";
import Register from "./pages/Forms/Register";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Forms/Login";
import TeamBuilder from "./pages/NavBar/TeamBuilder";
import Profile from "./pages/NavBar/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/teambuilder",
        element: <TeamBuilder />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
