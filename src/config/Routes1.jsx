import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import About from "../pages/About";

const Routes1 = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />

      <Route path="/:category/:id" element={<Detail />} />

      <Route path="/:category" element={<Catalog />} />

      <Route path="/about" element={<About />} />

      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routes1;
