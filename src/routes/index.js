import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Book from "../pages/Book/Book";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Landing></Landing>}></Route>
      <Route path="book" element={<Book></Book>}></Route>
    </Routes>
  );
};

export default Router;
