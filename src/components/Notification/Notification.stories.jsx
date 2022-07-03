import React from "react";
import Notification from "./Notification";

export default {
  title: "Components/Notification",
  component: Notification,
};

export const Primary = () => <Notification>Notification Text</Notification>;
export const Secondary = () => (
  <Notification handleClick={() => alert("hi")}>Notification Text</Notification>
);
