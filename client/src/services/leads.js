import api from "./apiConfig";

export const getLeads = async () => {
  try {
    const response = await api.get("/leads/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLeads = async (data) => {
  try {
    const response = await api.post("/leads/", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLeads = async (id) => {
  try {
    const response = await api.delete(`/leads/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
