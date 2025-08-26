import axiosInstance from "../helpers/axiosInstances"; 

export async function fetchCoinById(id) { 

    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        console.log(response); 

        return response.data;
              
    } catch (error) { 
        console.error(`Error Message ${error.message}`)
        
    }
}