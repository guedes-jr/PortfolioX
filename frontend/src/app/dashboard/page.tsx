"use client"; // Para usar hooks no Next.js 14
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;