import React, { FC, useState, useRef } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value); // для управляемого
    console.log(inputRef.current?.value); // для неуправляемого
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // начали элемент перемещать
    console.log("drag");
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // вошли в предел квадрата
    e.preventDefault();
    setIsDrag(true);
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // вышли за пределы квадрата
    e.preventDefault();
    setIsDrag(false);
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // если на элемент закинули первый квадрат
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <input value={value} onChange={changeHandler} type="text" placeholder="управляемый" />
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />

      <button onClick={clickHandler}> наш текст </button>

      <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: "red", marginTop: 16 }}></div>
      <div
        onDragOver={dragWithPreventHandler}
        onDragLeave={leaveHandler}
        onDrop={dropHandler}
        style={{ width: 200, height: 200, background: isDrag ? "blue" : "red", marginTop: 16, marginBottom: 16 }}
      ></div>
    </div>
  );
};

export default EventsExample;
