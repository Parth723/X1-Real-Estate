// userHomeRelationship.ts
import { baseUrl } from "@/modules/helpers/baseUrl";
import { updateUsersForHomeEndpoint } from "@/modules/helpers/endpoints";
import axios from "axios";

export const updateUsersForHome = async ({ homeId, updatedUsers }: { homeId: number; updatedUsers: number[] }) => {
  console.log("Home ID: ",homeId);
  console.log("Updated Users: ",updatedUsers);
  
  try { 
    const response = await axios.put(`${baseUrl}${updateUsersForHomeEndpoint}/${homeId}`, {
      updatedUsers,
    });
    console.log("The updated users data: ", updatedUsers);
    return response.data;
  } catch (error) {
    console.error("Error updating users for home:", error);
    throw error;
  }
};
