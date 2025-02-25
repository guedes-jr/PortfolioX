"use client"; // Para usar hooks no Next.js 14
import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface AuthContextType {
  token: string | null;
  user: any | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  setUser: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(Cookies.get("token") || null);
  const [user, setUserState] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const storedToken = Cookies.get("token");
    const storedUser = Cookies.get("user");

    if (storedToken) {
      setTokenState(storedToken);
      setIsAuthenticated(true);

      if (storedUser && storedUser !== "undefined") {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUserState(parsedUser);
        } catch (error) {
          console.error("Erro ao analisar dados do usuário:", error);
          setUserState(null);
        }
      } else {
        setUserState(null);
      }
    } else {
      setIsAuthenticated(false);
      setUserState(null);
    }
    setLoading(false); // Defina o carregamento como falso após a verificação dos cookies
  }, []);

  const setToken = (token: string) => {
    setTokenState(token);
    Cookies.set("token", token, { expires: 7 });
    setIsAuthenticated(true);
  };

  const setUser = (user: any) => {
    if (user) {
      setUserState(user);
      Cookies.set("user", JSON.stringify(user), { expires: 7 });
    } else {
      console.error("Erro: user é undefined");
    }
  };

  const logout = () => {
    setTokenState(null);
    setUserState(null);
    setIsAuthenticated(false);
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/login"); // Redireciona para a página de login após logout
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, setToken, setUser, logout }}>
      {!loading && children} {/* Renderize os filhos apenas quando o carregamento estiver completo */}
    </AuthContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};