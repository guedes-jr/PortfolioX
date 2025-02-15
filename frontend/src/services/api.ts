import axios from "axios";

// Definindo o tipo de resposta para a API
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",  // URL do seu backend
});

export default api;
