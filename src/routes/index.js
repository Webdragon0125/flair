import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Book from "../pages/Book/Book";
import Reser1 from "../pages/Reser1/Reser1";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/book" element={<Book></Book>}></Route>
      <Route path="/reser1" element={<Reser1></Reser1>}></Route>
      <Route path="*" element={<h1>404 Page</h1>}></Route>
    </Routes>
  );
};

export default Router;
