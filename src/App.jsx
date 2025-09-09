import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="h-screen flex flex-col">
      <AuthProvider>
        <BlogProvider>
          <Header search={search} setSearch={setSearch} />
          <main className="flex-1 flex items-center justify-center">
            <Outlet context={{ search }} />
          </main>
        </BlogProvider>
      </AuthProvider>
      <Toaster />
    </div>
  );
}

export default App;
