import React from "react";

import Navbar from './Navbar/Navbar';
import Filmovi from "./Filmovi/Filmovi";
import Serije from "./Serije/Serije";
import Opis from "./Opis";
import OpisSer from "./Opis-s";
import Favoriti from "./Favorite";

import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Filmovi />} />
          <Route path="serije" element={<Serije />} />
          <Route path={"filmovi/:id"} element={<Opis />} />
          <Route path={"serije/:id"} element={<OpisSer />} />
          <Route path={"favorite"} element={<Favoriti />} />
        </Routes>
      </div>
    </>
  );
};

export default Main;
