import React, { useState } from "react";
import SearchCard from "./components/SearchCard";
import PokeList from "./components/PokeList";
import "./App.css";

export const setCurURLContext = React.createContext();
export const setLatestSubmittedStringContext = React.createContext();
export const setSearchCardLoadedContext = React.createContext();
export const shinyContext = React.createContext();

function App() {
  const [curURL, setCurURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [latestSubmittedString, setLatestSubmittedString] = useState("");
  const [searchCardLoaded, setSearchCardLoaded] = useState(false);
  const [shiny, setShiny] = useState(false);

  return (
    <div className="App">
      <shinyContext.Provider value={shiny}>
        <setCurURLContext.Provider value={setCurURL}>
          <SearchCard
            searchCardLoaded={searchCardLoaded}
            setSearchCardLoaded={setSearchCardLoaded}
            latestSubmittedString={latestSubmittedString}
            setLatestSubmittedString={setLatestSubmittedString}
          />
        </setCurURLContext.Provider>

        <setLatestSubmittedStringContext.Provider
          value={setLatestSubmittedString}
        >
          <setSearchCardLoadedContext.Provider value={setSearchCardLoaded}>
            <PokeList
              curURL={curURL}
              setCurURL={setCurURL}
              shiny={shiny}
              setShiny={setShiny}
            />
          </setSearchCardLoadedContext.Provider>
        </setLatestSubmittedStringContext.Provider>
      </shinyContext.Provider>
    </div>
  );
}

export default App;
