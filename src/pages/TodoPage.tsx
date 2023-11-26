import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ITodo } from "../types/type";
import List from "../components/lists/List";
import TodoItem from "../components/items/TodoItem";

const TodoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <h1> Страница всех дел </h1>
      <List
        items={todos}
        renderItem={(todo: ITodo) => (
          <TodoItem todo={todo} key={todo.id} onClick={(todo) => navigate("/todos/" + todo.id)} />
        )}
      />
    </div>
  );
};

export default TodoPage;
