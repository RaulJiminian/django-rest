import api from "./apiConfig";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

export const getLeads = async () => {
  try {
    const response = await api.get("/api/leads/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLeads = async (data) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.post("/api/leads/", data, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLeads = async (id) => {
  try {
    const token = await getToken();
    const headers = {
      headers: {
        Authorization: token,
      },
    };
    const response = await api.delete(`/api/leads/${id}/`, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};
