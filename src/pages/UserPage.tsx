import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/type";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List from "../components/lists/List";
import UserItem from "../components/items/UserItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1> Страница всех пользователей </h1>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem user={user} key={user.id} onClick={(user) => navigate("/users/" + user.id)} />
        )}
      />
    </>
  );
};

export default UserPage;
