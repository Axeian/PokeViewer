import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import PokeCard from "./PokeCard";

function SearchCard() {
  const [latestSubmittedString, setLatestSubmittedString] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [invalidPokemon, SetInvalidPokemon] = useState(false);

  const isMounted = useRef(false);

  useEffect(() => {
    let source = axios.CancelToken.source();
    const getPokemonData = async () => {
      if (isMounted.current) {
        try {
          const prevPokemon = pokemonData ? pokemonData.name : null;

          let bug = false; // handling the #61 bug in pokeAPI.
          if (
            latestSubmittedString === "61" ||
            latestSubmittedString.toLowerCase() === "poliwhirl"
          )
            bug = true;

          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${latestSubmittedString.toLowerCase()}` +
              (bug ? "/" : ""),
            {
              cancelToken: source.token,
            }
          );

          if (res.data.name !== prevPokemon) {
            setPokemonData(res.data);
            setImageLoaded(false);
          }
        } catch (err) {
          if (!axios.isCancel(err)) SetInvalidPokemon(true);
        }
      }
    };

    getPokemonData();
    return () => source.cancel();
  }, [latestSubmittedString, pokemonData]);

  useEffect(() => {
    let source = axios.CancelToken.source();
    const getTypeData = async () => {
      if (isMounted.current) {
        let strongWeakData = [];
        let typeArray = [];

        for (const t of pokemonData.types) {
          let type = t.type.name;
          typeArray.push(type);
          const typeRes = await axios.get(
            `https://pokeapi.co/api/v2/type/${type}/`,
            { cancelToken: source.token }
          );

          let tData = typeRes.data.damage_relations;
          tData = Object.fromEntries(
            Object.entries(tData).map(([key, types]) => [
              key,
              types.map((t) => t.name),
            ])
          );
          tData.type = type;
          strongWeakData.push(tData);
        }

        setTypeData(strongWeakData);
        setPokemonTypes(typeArray);
      } else {
        isMounted.current = true;
      }
    };
    getTypeData();

    return () => source.cancel();
  }, [pokemonData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    SetInvalidPokemon(false);
    setLatestSubmittedString(pokemonName);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ margin: "auto" }}>
      <SearchBar
        pokemonName={pokemonName}
        handleSubmit={handleSubmit}
        setPokemonName={setPokemonName}
      />

      {invalidPokemon && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Who's that Pokemon? Please enter valid Pokemon name.</strong>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <PokeCard
        pokemonData={pokemonData}
        pokemonTypes={pokemonTypes}
        typeData={typeData}
        imageLoaded={imageLoaded}
        setImageLoaded={setImageLoaded}
        fromList={false}
      />
    </div>
  );
}

export default React.memo(SearchCard);
