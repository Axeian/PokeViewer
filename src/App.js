import React, { useState } from "react";
import SearchCard from "./components/SearchCard";
import PokeList from "./components/PokeList";
import "./App.css";

export const setCurURLContext = React.createContext();
export const setLatestSubmittedStringContext = React.createContext();
export const setSearchCardLoadedContext = React.createContext();
export const shinyContext = React.createContext();
export const hiddenContext = React.createContext();
export const lastViewedPokemonContext = React.createContext();

function App() {
  const [curURL, setCurURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [latestSubmittedString, setLatestSubmittedString] = useState("");
  const [searchCardLoaded, setSearchCardLoaded] = useState(false);
  const [shiny, setShiny] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastViewedPokemon, setLastViewedPokemon] = useState(null);

  return (
    <div className="App">
      <lastViewedPokemonContext.Provider value={lastViewedPokemon}>
        <hiddenContext.Provider value={[hidden, setHidden]}>
          <shinyContext.Provider value={shiny}>
            <setCurURLContext.Provider value={setCurURL}>
              <SearchCard
                searchCardLoaded={searchCardLoaded}
                setSearchCardLoaded={setSearchCardLoaded}
                latestSubmittedString={latestSubmittedString}
                setLatestSubmittedString={setLatestSubmittedString}
                hidden={hidden}
                setHidden={setHidden}
                setLastViewedPokemon={setLastViewedPokemon}
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
        </hiddenContext.Provider>
      </lastViewedPokemonContext.Provider>
    </div>
  );
}

export default App;
