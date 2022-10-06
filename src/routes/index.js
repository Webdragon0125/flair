import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Landing1 from "../pages/Landing1/Landing1";
import Book from "../pages/Book/Book";
import Reser1 from "../pages/Reser1/Reser1";
import Reser2 from "../pages/Reser2/Reser2";
import Reser3 from "../pages/Reser3/Reser3";
import Reser5 from "../pages/Reser5/Reser5";
import Travelflex from "../pages/Travelflex/Travelflex";
import SeatSelect from "../pages/SeatSelect/SeatSelect";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/landing1" element={<Landing1></Landing1>}></Route>
      <Route path="/book" element={<Book></Book>}></Route>
      <Route path="/reser1" element={<Reser1></Reser1>}></Route>
      <Route path='/reser2' element={<Reser2></Reser2>}></Route>
      <Route path='/reser3' element={<Reser3></Reser3>}></Route>
      <Route path='/reser5' element={<Reser5></Reser5>}></Route>
      <Route path='/travelflex' element={<Travelflex></Travelflex>}></Route>
      <Route path='/seat-select' element={<SeatSelect></SeatSelect>}></Route>
      <Route path="*" element={<h1>404 Page</h1>}></Route>
    </Routes>
  );
};

export default Router;
