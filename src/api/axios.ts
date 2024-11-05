import axios from 'axios';
import { User } from '../types/UserType';


const BASE_URL = "https://jsonplaceholder.typicode.com/users";

 export const getMissions = async (): Promise<User[]> => {
    try {
        const response = await axios.get<User[]>(BASE_URL);
       
        return response.data
    } catch (error) {
       
     throw error
    }
};

