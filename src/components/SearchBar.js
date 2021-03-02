import React, { useContext } from "react";
import { setCurURLContext } from "../App";

function SearchBar({ pokemonName, handleSubmit, setPokemonName, setHidden }) {
  const setCurURL = useContext(setCurURLContext);

  const genOffsets = [0, 151, 251, 386, 493, 649, 721, 809];

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
        {` `}
        PokeViewer
      </a>
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
            {genOffsets.map((offset, idx) => (
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
        <form
          style={{ marginLeft: "auto", marginRight: 0 }}
          onSubmit={handleSubmit}
          className="form-inline my-2 my-md-0"
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Pokemon "
            aria-label="Search"
            value={pokemonName}
            onChange={(e) => {
              setPokemonName(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default React.memo(SearchBar);
