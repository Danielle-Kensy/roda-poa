import api from "./axios";

export const getRents = async () => {
  const response = await api.get("/alugueis");
  return response.data;
};

export const createRent = async (data) => {
  const response = await api.post("/alugueis", data);
  return response.data;
};

export const updateRent = async (id, returnCatraca) => {
  const response = await api.put(`/alugueis/${id}/finalizar`, returnCatraca);
  return response.data;
};
