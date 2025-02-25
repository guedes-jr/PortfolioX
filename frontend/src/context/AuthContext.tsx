"use client"; // Adicionado para tornar este um Client Component

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation"; // Para redirecionamento no Next.js 14
import Cookies from "js-cookie";

// Definição do tipo do contexto de autenticação
interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

// Criando o contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);
  const router = useRouter();

  // Atualiza o token no estado e nos Cookies
  const setToken = (newToken: string | null) => {
    setTokenState(newToken);
    if (newToken) {
      Cookies.set("token", newToken, { expires: 7 });
    } else {
      Cookies.remove("token");
    }
  };

  // Logout limpa o token e redireciona para login
  const logout = () => {
    setToken(null);
    router.push("/login");
  };

  // Recupera o token dos Cookies ao carregar a página
  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
