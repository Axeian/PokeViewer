import React, { useState } from "react";
import SearchCard from "./components/SearchCard";
import PokeList from "./components/PokeList";
import "./App.css";

export const CurURLContext = React.createContext();
export const setCurURLContext = React.createContext();

function App() {
  const [curURL, setCurURL] = useState("https://pokeapi.co/api/v2/pokemon");

  return (
    <div className="App">
      <setCurURLContext.Provider value={setCurURL}>
        <SearchCard />
      </setCurURLContext.Provider>

      <CurURLContext.Provider value={[curURL, setCurURL]}>
        <PokeList />
      </CurURLContext.Provider>
    </div>
  );
}

export default App;
