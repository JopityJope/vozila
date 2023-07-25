import React from "react";
import { useState } from "react";

function NovoVozilo({ onUserSubmit }) {
  const [marka, setMarka] = useState("");
  const [boja, setBoja] = useState("");
  const [godiste, setGodiste] = useState("");
  const handleUserSubmit = (e) => {
    e.preventDefault();

    if (marka && boja && godiste) {
      onUserSubmit({ marka, boja, godiste: Number(godiste) });
      setMarka("");
      setBoja("");
      setGodiste("");
    }
  };

  return (
    <form onSubmit={handleUserSubmit}>
      <p>
        <label>Marka vozila:</label>
        <input
          type="text"
          value={marka}
          onChange={(e) => setMarka(e.target.value)}
        />
      </p>
      <p>
        <label>Boja vozila:</label>
        <input
          type="text"
          value={boja}
          onChange={(e) => setBoja(e.target.value)}
        />
      </p>
      <p>
        <label>Godište vozila:</label>
        <input
          type="number"
          value={godiste}
          onChange={(e) => setGodiste(e.target.value)}
        />
      </p>
      <button type="submit">Dodaj vozilo</button>
    </form>
  );
}

export default NovoVozilo;
