import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/type";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + id);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const clickHandler = () => {
    navigate("/users");
  };

  return (
    <div>
      <button onClick={clickHandler} style={{ marginTop: 16 }}>
        К списку пользователей
      </button>
      <h2> Страница пользователя: </h2>
      <h1> {user?.name} </h1>

      <div>
        <p>
          email пользователя: <b> {user?.email} </b>
        </p>
        <p>
          Пользователь проживает в городе: <b> {user?.address.city} </b>
        </p>
        <p>
          по улице: <b> {user?.address.street} </b>
        </p>
        <p>
          его zipcode: <b> {user?.address.zipcode} </b>
        </p>
      </div>
    </div>
  );
};

export default UserItemPage;
