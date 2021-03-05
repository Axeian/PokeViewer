import axios from "axios";
import React, { useContext, useRef, useEffect, useState } from "react";
import { setCurURLContext } from "../App";
import SearchResults from "./SearchResults";

function SearchBar({
  pokemonName,
  handleSearch,
  handleSubmit,
  setPokemonName,
  setHidden,
}) {
  const setCurURL = useContext(setCurURLContext);

  const [resultsVisible, setResultsVisible] = useState(false);
  const [matches, setMatches] = useState([]);

  const formRef = useRef(null);
  const resultsRef = useRef(null);
  const inputRef = useRef(null);

  const genOffsets = useRef([0, 151, 251, 386, 493, 649, 721, 809]);
  const allPokemon = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  useEffect(() => {
    const getAllPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=1500"
      );
      allPokemon.current = res.data.results.map((p) => p.name);
    };

    if (!allPokemon.current) getAllPokemon();

    if (pokemonName.length !== 0) {
      let matchesFound = allPokemon.current.filter((pokemon) => {
        const regex = new RegExp(`^${pokemonName}`, "gi");
        return pokemon.match(regex);
      });
      setMatches(matchesFound);
    } else {
      setMatches([]);
    }
  }, [pokemonName]);

  const focusOnResults = (event) => {
    if (event.which == "40" && matches.length) {
      resultsRef.current.firstElementChild.focus();
      event.preventDefault();
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top py-1">
      <a
        className="navbar-brand"
        href="#"
        onClick={() => {
          setCurURL(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`);
          setHidden(true);
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/favicon-32x32.png"}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <span className="d-none d-md-inline">
          {` `}
          PokeViewer
        </span>
      </a>

      <div className="order-md-12" ref={formRef}>
        <form
          onClick={() => setResultsVisible(true)}
          onSubmit={handleSubmit}
          className="form-inline my-2 my-md-0"
        >
          <input
            ref={inputRef}
            className="form-control mr-sm-2 col-9 col-sm-4"
            type="search"
            placeholder="Search Pokemon "
            aria-label="Search"
            value={pokemonName}
            onChange={(e) => {
              setPokemonName(e.target.value);
            }}
            onKeyDown={focusOnResults}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 d-none d-md-inline"
            type="submit"
          >
            Search
          </button>
        </form>

        <SearchResults
          formRef={formRef}
          setResultsVisible={setResultsVisible}
          matches={matches}
          handleSearch={handleSearch}
          resultsVisible={resultsVisible}
          resultsRef={resultsRef}
          inputRef={inputRef}
        />
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse nav-item"
        id="navbarSupportedContent"
      >
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Generations
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            {genOffsets.current.map((offset, idx) => (
              <a
                key={idx + 1}
                className="dropdown-item"
                href="#"
                onClick={() =>
                  setCurURL(
                    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
                  )
                }
              >
                Gen {idx + 1}
              </a>
            ))}
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                setCurURL(
                  `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=898`
                )
              }
            >
              And more!
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(SearchBar);
