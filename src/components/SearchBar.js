import React from "react";

function SearchBar({ pokemonName, handleSubmit, setPokemonName }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top py-1">
      <a className="navbar-brand" href="#">
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form onSubmit={handleSubmit} className="form-inline my-2 my-md-0">
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
