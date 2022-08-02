import React from "react";

import CardSerije from "./CardSerije";

const SerijeMapper = ({ serije }) => {
  return (
    <>
      {serije.length > 0 ? (
        <>
          {serije.map((serija) => (
            <CardSerije serija={serija} key={serija.id} />
          ))}
        </>
      ) : (
        <div>
          <h1>No serije found</h1>
        </div>
      )}
    </>
  );
};

export default SerijeMapper;
