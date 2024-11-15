import { baseUrl } from "@/modules/helpers/baseUrl";
import { getHomesForAnUserEndpoint, getUsersForHomeEndpoint } from "@/modules/helpers/endpoints";
import axios from "axios";

export async function homeService(selectedUser: number, page: number = 1, pageSize: number = 10) {
  try {
    const response = await axios.get(`${baseUrl}${getHomesForAnUserEndpoint}/${selectedUser}`, {
      params: {
        page,      
        pageSize 
      }   
    });    
    return response.data;
  } catch (error) {
    console.error("Error fetching homes:", error);
    throw error;
  }
}

export async function getUsersForHomeID(homeId: number){
  try {
    const response = await axios.get(`${baseUrl}${getUsersForHomeEndpoint}/${homeId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
