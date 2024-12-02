import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/projects`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const fetchPerson = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/person`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching person:', error);
    return [];
  }
}