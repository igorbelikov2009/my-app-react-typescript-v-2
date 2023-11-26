import React, { FC } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import UserPage from "../pages/UserPage";
import TodoPage from "../pages/TodoPage";
import EventsExamplePage from "../pages/EventsExamplePage";
import UserItemPage from "../pages/UserItemPage";
import TodoItemPage from "../pages/TodoItemPage";

const AppRouter: FC = () => {
  return (
    <>
      <div>
        <div style={{ marginBottom: 16 }}>
          <NavLink to={"/"}> Примеры событий </NavLink>
        </div>
        <div style={{ marginBottom: 16 }}>
          <NavLink to={"/users"}> Пользователи </NavLink>
        </div>
        <div style={{ marginBottom: 16 }}>
          <NavLink to="/todos"> Список дел </NavLink>
        </div>
      </div>

      <Routes>
        <Route>
          <Route path="/" element={<EventsExamplePage />} />

          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodoPage />} />

          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
