import "./App.css";

import { useState } from "react";
import NovoVozilo from "./components/NovoVozilo";
import Vozilo from "./components/Vozilo";

function App() {
  const [vozila, setVozila] = useState([
    { id: 1, marka: "VW", boja: "bijela", godište: 2020 },
    { id: 2, marka: "Mercedes", boja: "crna", godište: 2018 },
  ]);

  const novoVozilo = function ({ marka, boja, godiste }) {
    setVozila([
      ...vozila,
      { id: vozila.length + 1, marka: marka, boja: boja, godište: godiste },
    ]);
  };
  return (
    <>
      <NovoVozilo onUserSubmit={novoVozilo} />
      <ul>
        {vozila.map((vozilo) => (
          <Vozilo
            key={vozilo.id}
            marka={vozilo.marka}
            boja={vozilo.boja}
            godiste={vozilo.godište}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
