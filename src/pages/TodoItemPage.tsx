import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ITodo } from "../types/type";

const TodoItemPage: FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo>("https://jsonplaceholder.typicode.com/todos/" + id);
      setTodo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const clickHandler = () => {
    navigate("/todos");
  };

  return (
    <div onClick={clickHandler}>
      <button style={{ marginTop: 16 }}> К списку дел </button>

      <h2> Дело № {todo?.id} </h2>
      <h1>{todo?.title}</h1>
    </div>
  );
};

export default TodoItemPage;
