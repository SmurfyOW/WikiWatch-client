import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/NavBar/HomePage";
import Register from "./pages/Forms/Register";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Forms/Login";
import TeamBuilder from "./pages/NavBar/TeamBuilder";
import Profile from "./pages/NavBar/Profile";
import { rootLoader } from "./loaders/rootLoader";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
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
        path: "/register",
        element: (
          <UserNotConnected>
            <Register />,
          </UserNotConnected>
        ),
      },
      {
        path: "/login",
        element: (
          <UserNotConnected>
            <Login />,
          </UserNotConnected>
        ),
      },
    ],
  },
]);
