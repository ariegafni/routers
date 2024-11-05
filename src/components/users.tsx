import { useEffect, useState } from "react";
import { User } from "../types/UserType";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching missions", error);
    } 
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} , 
            {user.id}  ,
            <Link to = {`/users/${user.id}`}>user details</Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

