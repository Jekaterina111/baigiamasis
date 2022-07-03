import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const links = [
  { url: "/", title: "Login" },
  { url: "/register", title: "Register" },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation links={links} />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;