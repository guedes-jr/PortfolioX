import axios from 'axios';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/token/', {
      username,
      password,
    });
    const { access } = response.data;
    localStorage.setItem('token', access);  // Salva o token no localStorage
    return access;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw new Error('Falha ao fazer login');
  }
};
