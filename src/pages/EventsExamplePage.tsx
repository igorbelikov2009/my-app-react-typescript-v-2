import React, { FC } from "react";
import Card, { CardVariant } from "../components/Card";
import EventsExample from "../components/EventsExample";

const EventsExamplePage: FC = () => {
  return (
    <div>
      <EventsExample />
      <Card onClick={(num) => console.log("click OK", num)} width="200px" height="200px" variant={CardVariant.primary}>
        <button style={{ margin: 8 }}> кнопка </button>
        <div style={{ marginLeft: 8 }}> катрочка </div>
      </Card>
    </div>
  );
};

export default EventsExamplePage;
