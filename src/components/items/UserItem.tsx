import React, { FC } from "react";
import { IUser } from "../../types/type";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: 16, border: "1px solid gray", marginBottom: 16 }}>
      Пользователь {user.id} {user.name} с ником {user.username} имеет email {user.email} и проживает в городе
      {user.address.city} на улице {user.address.street}
    </div>
  );
};

export default UserItem;
