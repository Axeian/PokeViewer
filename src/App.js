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
  const [pokemonData, setPokemonData] = useState(null);

  return (
    <div className="App">
      {searchCardLoaded && !hidden && (
        <div className="row justify-content-center">
          <div
            style={{
              position: "absolute",
              zIndex: "10",
              top: "60%",
            }}
          >
            <span
              className="my-auto "
              onClick={() => setLatestSubmittedString(`${pokemonData.id - 1}`)}
              style={{
                marginRight: "250px",
                visibility: `${pokemonData.id > 1 ? "" : "hidden"}`,
              }}
            >
              <button
                className="btn btn-outline-light p-0 flex"
                style={{ display: "inline-block", verticalAlign: "middle" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
            </span>
            <span
              className="my-auto "
              onClick={() => setLatestSubmittedString(`${pokemonData.id + 1}`)}
            >
              <button
                className="btn btn-outline-light p-0 flex"
                style={{ display: "inline-block", verticalAlign: "middle" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      )}
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
                pokemonData={pokemonData}
                setPokemonData={setPokemonData}
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
