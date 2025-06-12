import api from "./axios";

// Lista todas as bicicletas, com filtros opcionais
export async function getBikes({ status, baia } = {}) {
  const params = {};
  if (status) params.status = status;
  if (baia) params.baia = baia;

  const response = await api.get("/bicicletas", { params });
  return response.data;
}

// Busca uma bicicleta por ID
export async function getBikeById(id) {
  const response = await api.get(`/bicicletas/${id}`);
  return response.data;
}

// Adiciona uma nova bicicleta (requer permissão de developer)
export async function createBike(data) {
  const response = await api.post("/bicicletas", data);
  return response.data;
}

// Atualiza uma bicicleta existente
export async function updateBike(id, data) {
  const response = await api.put(`/bicicletas/${id}`, data);
  return response.data;
}

// Remove uma bicicleta
export async function deleteBike(id) {
  const response = await api.delete(`/bicicletas/${id}`);
  return response.data;
}
