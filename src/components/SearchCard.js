import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import PokeCard from "./PokeCard";
import RotateLoader from "react-spinners/RotateLoader";

function SearchCard({
  searchCardLoaded,
  setSearchCardLoaded,
  latestSubmittedString,
  setLatestSubmittedString,
  hidden,
  setHidden,
  setLastViewedPokemon,
  pokemonData,
  setPokemonData,
}) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [invalidPokemon, SetInvalidPokemon] = useState(false);
  const [abilitiesData, setAbilitiesData] = useState({});

  const isMounted = useRef(false);

  useEffect(() => {
    let source = axios.CancelToken.source();
    setSearchCardLoaded(false);
    setHidden(false);
    SetInvalidPokemon(false);
    const getPokemonData = async () => {
      if (isMounted.current) {
        try {
          const prevPokemon = pokemonData ? pokemonData.name : null;
          setLastViewedPokemon(prevPokemon);

          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${latestSubmittedString.toLowerCase()}/`,
            {
              cancelToken: source.token,
            }
          );

          if (res.data.name !== prevPokemon) {
            setPokemonData(res.data);
            setImageLoaded(false);
            setSearchCardLoaded(false);
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
    setHidden(false);
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
        setSearchCardLoaded(true);
      } else {
        isMounted.current = true;
      }
    };
    getTypeData();

    return () => source.cancel();
  }, [pokemonData]);

  useEffect(() => {
    let source = axios.CancelToken.source();
    setHidden(false);
    const getAbilityData = async () => {
      if (isMounted.current) {
        let abilityData = {};

        for (const a of pokemonData.abilities) {
          let ability = a.ability.name;
          const abilityRes = await axios.get(
            `https://pokeapi.co/api/v2/ability/${ability}/`,
            { cancelToken: source.token }
          );

          let abData = abilityRes.data.effect_entries;

          abData = abData.filter((entry) => entry.language.name === "en");

          abilityData[`${ability}`] = abData[0].short_effect;
        }

        setAbilitiesData(abilityData);
        setSearchCardLoaded(true);
      } else {
        isMounted.current = true;
      }
    };
    if (pokemonData) getAbilityData();

    return () => source.cancel();
  }, [pokemonData]);

  const handleSearch = (name) => {
    SetInvalidPokemon(false);
    setLatestSubmittedString(name);
    setHidden(false);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSearch(pokemonName);
  };

  return (
    <div style={{ margin: "auto" }}>
      <SearchBar
        pokemonName={pokemonName}
        handleSubmit={handleSubmit}
        setPokemonName={setPokemonName}
        setHidden={setHidden}
        handleSearch={handleSearch}
      />

      {invalidPokemon && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <div>
            <img
              src={process.env.PUBLIC_URL + "/whos_that_pokemon.png"}
              alt="who's that pokemon - error"
              width="50"
              height="60"
            ></img>
          </div>

          <strong> Who's that Pokemon? Please enter valid Pokemon name.</strong>
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

      {pokemonData && !searchCardLoaded && !invalidPokemon && (
        <div
          className="d-inline-flex align-items-center justify-content-center"
          style={{ height: "423px" }}
        >
          <RotateLoader loading={!searchCardLoaded} size={15} />
        </div>
      )}

      {searchCardLoaded && !hidden && (
        <div className="row justify-content-center">
          <PokeCard
            pokemonData={pokemonData}
            pokemonTypes={pokemonTypes}
            typeData={typeData}
            imageLoaded={imageLoaded}
            setImageLoaded={setImageLoaded}
            fromList={false}
            setHidden={setHidden}
            abilitiesData={abilitiesData}
          />
        </div>
      )}
    </div>
  );
}

export default React.memo(SearchCard);
