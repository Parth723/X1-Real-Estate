import { baseUrl } from "@/modules/helpers/baseUrl";
import { getAllUsersEndpoint } from "@/modules/helpers/endpoints";
import axios from "axios";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}${getAllUsersEndpoint}`, {
    });
    return response.data;
  } catch (error) {
    console.error("Error getting all users:", error);
    throw error;
  }
};