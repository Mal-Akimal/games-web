import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/';
const GET_PATHS_URL = `${BASE_URL}paths`;

// Fetch all paths
export const get_paths = async () => {
  const response = await axios.get(GET_PATHS_URL);
  return response.data;
};

// Fetch a single path by slug
export const get_single_path = async (slug) => {
  const response = await axios.get(`${GET_PATHS_URL}/${slug}`);
  return response.data;
};

// Register a new user
export const registerUser = async (userData) => {
    try {
      const response = await axios.post('http://127.0.0.1:3000/users', userData);
      return response.data; // Contains success message and user data
    } catch (error) {
      throw error.response?.data || error.message; // Contains error messages
    }
  };
  
  

// Login a user
export const loginUser = async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}users/sign_in`, { user: credentials }); // Wrap credentials in "user"
      const token = response.headers['authorization']; // Grab the JWT token
      if (token) {
        axios.defaults.headers.common['Authorization'] = token; // Set default Authorization header
      }
      return response.data; // Contains success message and user data
    } catch (error) {
      throw error.response?.data || { message: 'An unknown error occurred during login.' }; // Handles error messages
    }
  };
  

// Logout a user
export const logoutUser = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}users/sign_out`);
    delete axios.defaults.headers.common['Authorization']; // Remove Authorization header
    return response.data; // Contains success message
  } catch (error) {
    throw error.response?.data || error.message; // Handles error messages
  }
};
