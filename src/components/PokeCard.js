import React, { useState, useContext, useEffect } from "react";
import DamageRelations from "./DamageRelations";
import SearchCardPic from "./SearchCardPic";
import TypeBlock, { getColor } from "./TypeBlock";
import {
  setLatestSubmittedStringContext,
  setSearchCardLoadedContext,
  shinyContext,
  hiddenContext,
  lastViewedPokemonContext,
} from "../App";
import AbilityBlock from "./AbilityBlock";

function PokeCard({
  pokemonData,
  pokemonTypes,
  typeData,
  imageLoaded,
  setImageLoaded,
  fromList,
  setHidden,
  abilitiesData,
}) {
  const [listImageLoaded, setListImageLoaded] = useState(false);
  const [hover, setHover] = useState(false);

  const setLatestSubmittedString = useContext(setLatestSubmittedStringContext);
  const setSearchCardLoaded = useContext(setSearchCardLoadedContext);
  const shiny = useContext(shinyContext);
  const [, fromListsetHidden] = useContext(hiddenContext);
  const lastViewedPokemon = useContext(lastViewedPokemonContext);

  const cardClicked = () => {
    if (fromList) {
      if (lastViewedPokemon !== pokemonData.name) {
        setLatestSubmittedString(pokemonData.name);
        setSearchCardLoaded(false);
      } else {
        setSearchCardLoaded(true);
        fromListsetHidden(false);
      }

      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setListImageLoaded(false);
  }, [shiny]);

  const getBgcolor = (pokemonTypes) => {
    let [, bgColor] = getColor(pokemonTypes[0]);
    return bgColor;
  };

  const getBgimage = (pokemonTypes) => {
    let [, color1] = getColor(pokemonTypes[0]);
    let [, color2] = getColor(pokemonTypes[1]);
    return `linear-gradient(45deg,${color1},${color2})`;
  };

  return (
    <div className="container mt-5 mx-0">
      {pokemonData && (
        <div>
          <div className="row ">
            <div
              className="col-auto mx-auto p-3 mb-15 jumbotron"
              style={{
                borderRadius: "20px",
                cursor: `${hover && fromList ? "pointer" : ""}`,
                boxShadow: `${
                  hover && fromList
                    ? "inset 0 0 0 10px rgba(255,255,255, .4)"
                    : "inset 0 0 0 10px #e9d004"
                }`,
                backgroundColor: `${
                  pokemonTypes.length === 1 ? getBgcolor(pokemonTypes) : ""
                }`,
                backgroundImage: `${
                  pokemonTypes.length > 1 ? getBgimage(pokemonTypes) : ""
                }`,
              }}
              onClick={cardClicked}
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {!fromList && (
                <button
                  onClick={() => setHidden(true)}
                  type="button"
                  className="close"
                  aria-label="Close"
                  style={{
                    position: "absolute",
                    top: "5%",
                    left: "85%",
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              )}
              <SearchCardPic
                pokemonID={pokemonData.id}
                imageLoaded={!fromList ? imageLoaded : listImageLoaded}
                setImageLoaded={!fromList ? setImageLoaded : setListImageLoaded}
                fromList={fromList}
              />

              <div className="text-uppercase font-weight-bold">
                {pokemonData.id < 10000 && `#${pokemonData.id}`}{" "}
                {pokemonData.name}
              </div>

              <div className="m-1">
                {pokemonTypes.map((t) => (
                  <TypeBlock type={t} key={t} />
                ))}
              </div>

              {!fromList && (
                <div>
                  {pokemonData.abilities.map((a) => (
                    <AbilityBlock
                      a={a}
                      key={
                        abilitiesData[`${a.ability.name}`] === undefined
                          ? a.ability.name
                          : abilitiesData[`${a.ability.name}`]
                      }
                      desc={abilitiesData[`${a.ability.name}`]}
                    />
                  ))}
                </div>
              )}

              {!fromList && (
                <button
                  className="btn btn-light btn-sm mt-1"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Damage Relations
                </button>
              )}
            </div>
          </div>

          {!fromList && (
            <div>
              <div
                className="collapse jumbotron p-2 mx-auto"
                id="collapseExample"
                style={{
                  border: "1.5px solid black",
                  backgroundColor: "#f2f2f2",
                }}
              >
                <DamageRelations typeData={typeData} />
              </div>
              <hr className="rounded" style={{ width: "80%" }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default React.memo(PokeCard);
