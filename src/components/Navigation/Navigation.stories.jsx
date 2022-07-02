import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import Navigation from "./Navigation";

export default {
    title: "Components/Navigation",
    component: Navigation,
    decorators: [withRouter],
};

const links = [
    { url: "/", title: "Login"}, 
    { url: "/", title: "Register"},

];

export const Primary = () => <Navigation links={links} />;
