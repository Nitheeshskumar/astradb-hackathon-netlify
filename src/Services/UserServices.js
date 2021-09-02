import axios from 'axios'

export const createUser = async (body) => {
    const response = await axios.post("/.netlify/functions/createUser", body);
    return response.data
  };

 export const updateUser = async (body) => {
    const response = await axios.post("/.netlify/functions/updateUser", body);
    return response.data
  };

  export const authenticate = async (body) => {
    const response = await axios.post("/.netlify/functions/authenticate", body);
    return response.data
  };
  export const getProviders = async (body) => {
    const response = await axios.post("/.netlify/functions/getProviders", body);
    return response.data
  };

  export const createProvider = async (body) => {
    const response = await axios.post("/.netlify/functions/createProvider", body);
    return response.data
  };


