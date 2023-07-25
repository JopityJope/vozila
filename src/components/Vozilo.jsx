import React from "react";

function Vozilo({ marka, boja, godiste }) {
  return (
    <>
      <h1>Vozilo: </h1>
      <p>
        Marka: {marka}, boja: {boja}, godište: {godiste}
      </p>
    </>
  );
}

export default Vozilo;
