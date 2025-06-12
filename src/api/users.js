import api from "./axios";

// Cadastro de novo usuário
export async function registerUser(userData) {
  const response = await api.post("/usuarios", userData);
  return response.data;
}

// Login de usuário (salva token no localStorage)
export async function loginUser({ username, password }) {
  const response = await api.post("/usuarios/login", { username, password });

  const { token, user_id } = response.data;

  if (token) {
    localStorage.setItem("token", token);
    localStorage.setItem("user_id", user_id);
  }

  return response.data;
}

// Obter perfil de usuário autenticado
export async function getUserProfile(userId) {
  const response = await api.get(`/usuarios/${userId}`);
  return response.data;
}

export async function updateUserProfile(userId, dadosAtualizados) {
  try {
    const response = await api.put(`/usuarios/${userId}`, dadosAtualizados);

    console.log("Usuário atualizado:", response.data.user);
    return response.data.user;
  } catch (error) {
    if (error.response) {
      console.error("Erro na atualização:", error.response.data.message);
    } else {
      console.error("Erro de rede:", error.message);
    }
    throw error;
  }
}
