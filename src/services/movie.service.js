import axios from "axios";
import enviroment from "../enviroments/enviroment";

export const getPopularShows = async (pageNumber) => {
    try {
        const response = await axios.get(
          `${enviroment.baseURL}/most-popular?page=${pageNumber}`
        );
        return response.data;
        
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
}

export const searchEpisodes = async (searchInput, pageNumber) => {
    try {
        const response = await axios.get(
          `${enviroment.baseURL}/search?q=${searchInput}&page=${pageNumber}`
        );
        return response.data;
        
      } catch (error) {
        console.error('Error searching episodes:', error);
      }
}

export const getDetails = async (serieId) => {
    try {
        const response = await axios.get(
          `${enviroment.baseURL}/show-details?q=${serieId}`
        );

        return response.data;
        
      } catch (error) {
        console.error('Error getting details from episodes:', error);
      }
}