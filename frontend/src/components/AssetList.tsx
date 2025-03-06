import React from "react";
import { useQuery } from "react-query";
import api from "@/src/services/api";
import { Asset } from "@/src/types";

// Função para buscar os ativos via API
const fetchAssets = async (): Promise<Asset[]> => {
  const response = await api.get("assets/");
  return response.data;
};

// Componente para exibir a lista de ativos
const AssetList: React.FC = () => {
  const { data, error, isLoading } = useQuery<Asset[], Error>("assets", fetchAssets);

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Lista de Ativos</h1>
      <ul>
        {data?.map((asset) => (
          <li key={asset.id}>
            {asset.name} ({asset.ticker})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;