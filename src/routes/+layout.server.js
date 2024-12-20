import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

export async function load() {
  const person = await axios.get(`${API_URL}/api/person?populate=photo&populate=logo`);

  const projects = await axios.get(`${API_URL}/api/projects?populate=images`);

  return {
    person: person.data.data,
    projects: projects.data.data,
  };
}
