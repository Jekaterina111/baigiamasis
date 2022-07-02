import React from "react";
import ListItem from "./ListItem";

export default {
    title: "Components/ListItem",
    component: ListItem,
};

export const Primary = () => (
<ListItem
 task="Cook" 
 date={new Date().getTime()}
 onCheked={(checkboxValue) => {

 }}
 />
);