import React from "react";

import { useState, useEffect, useContext } from "react";
import { apiServices } from "../../Services/API/rest";
import { SearchContext } from "../../Context/contexts";

import SerijeMapper from "./SerijeMapper";

const Serije = (props) => {
  const [serije, setSerije] = useState([]);
  const [search, ] = useContext(SearchContext);

  useEffect(() => {
    if (search === "") {
      apiServices.getBestSeries()
      .then((data) => setSerije(data));
    } else {
      apiServices.getSeries(search)
      .then((data) => setSerije(data));
    }
  }, [search]);

  return (
    <div className="container">
      <SerijeMapper serije={serije} />
    </div>
  );
};

export default Serije;
