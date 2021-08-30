import axios from 'axios'

export const listUsers = async (todo) => {
    const response = await axios.post("/.netlify/functions/listUsers", todo);
    return response.data
  };
