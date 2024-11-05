import { useParams } from "react-router-dom";
import { UserCardD} from "../types/UserType"; 
import { useEffect, useState } from "react";
import axios from "axios";


const UserCard = () => {
    const [user ,setUser]  = useState<UserCardD>()
    const { id } = useParams();

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get<UserCardD>(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
        
        
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    useEffect(()=>{
        fetchUserDetails()
    },[]);


  return (
   
    <div>
          <h2>User Details</h2>
          <p>ID: {user?.id}</p>
          <p>Name:{user?.name}</p>
           <p>Email: {user?.email}</p>
          <p>Phone: {user?.phone}</p>
        </div>
      
   
  )
};


export default UserCard

        