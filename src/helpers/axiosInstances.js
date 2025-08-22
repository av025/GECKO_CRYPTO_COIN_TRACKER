import axios from "axios"; 
import { COIN_GECKO_UPI_URL } from "./constant";

const axiosInstance = axios.create({
    baseURL: COIN_GECKO_UPI_URL,

}); 


export default axiosInstance; 