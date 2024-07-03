import axios from "axios";
import config from "../config.json"
import mockdata from "../mockdata.json"

const BACKEND_HOST = process.env.BACKEND_HOST || "http://localhost:8080";

const api = axios.create({
  baseURL: BACKEND_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to get user data
export const getUserData = async () => {
  if (config.offline_mode) {
    return mockdata.user;
  } 
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// Function to get user data
export const getBlogPosts = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// Function to get user README
export const getUserReadme = async () => {
  if (config.offline_mode) {
    return mockdata.userReadme;
  }
  try {
    const response = await api.get("/user/readme");
    
    return response.data;
  } catch (error) {
    console.error("Error fetching user README:", error);
    throw error;
  }
};

// Function to get projects
export const getProjects = async () => {
  if (config.offline_mode) {
    return mockdata.projects;
  } 
  try {
    const response = await api.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Function to get README for a specific repo
export const getRepoReadme = async (repoName: string) => {
  try {
    const response = await api.get(`/repos/${repoName}/readme`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching README for repo ${repoName}:`, error);
    throw error;
  }
};
