import api from "./axios";

export const getEstacoes = async () => {
  const response = await api.get("/estacoes");
  return response.data;
};

export const getEstacaoById = async (id) => {
  const response = await api.get(`/estacoes/${id}`);
  return response.data;
};

export const createEstacao = async (data) => {
  const response = await api.post("/estacoes", data);
  return response.data;
};

export const updateEstacao = async (id, data) => {
  const response = await api.put(`/estacoes/${id}`, data);
  return response.data;
};

export const deleteEstacao = async (id) => {
  const response = await api.delete(`/estacoes/${id}`);
  return response.data;
};
