"use client";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { token, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao sistema!</p>
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default Dashboard;
