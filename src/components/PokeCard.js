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
    <div className="container mt-5 ">
      {pokemonData && (
        <div>
          <div className="row mb-15 d-inline-flex justify-content-center">
            <div
              className="col-auto p-3 mb-0 jumbotron"
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
            </div>

            {!fromList && (
              <div
                className="col-auto row p-3 mb-0 jumbotron justify-content-center"
                style={{
                  borderRadius: "20px",
                  height: "422.px",
                  width: "282px",
                  boxShadow: "inset 0 0 0 10px #e9d004",
                  backgroundColor: `${
                    pokemonTypes.length === 1 ? getBgcolor(pokemonTypes) : ""
                  }`,
                  backgroundImage: `${
                    pokemonTypes.length > 1 ? getBgimage(pokemonTypes) : ""
                  }`,
                }}
              >
                <div
                  className="d-flex m-auto p-1"
                  style={{ border: "1px solid black", borderRadius: "10px" }}
                >
                  <div
                    className="list-group col-4 justify-content-center"
                    id="list-tab"
                    role="tablist"
                  >
                    {pokemonData.abilities.map((a, idx) => (
                      <AbilityBlock a={a} key={idx} />
                    ))}
                  </div>
                  <div className="tab-content col-8" id="nav-tabContent">
                    {pokemonData.abilities.map((a, key) => (
                      <div
                        key={key}
                        style={{ fontSize: "0.8em" }}
                        className={`tab-pane fade  ${
                          key === 0 ? " show active" : ""
                        }`}
                        id={"list-" + `${a.ability.name}`}
                        role="tabpanel"
                        aria-labelledby={
                          "list-" + `${a.ability.name}` + "-list"
                        }
                      >
                        <strong>
                          {!a.is_hidden ? "Ability" : "Hidden Ability"}
                        </strong>
                        <p>{abilitiesData[`${a.ability.name}`]}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
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
                </div>
              </div>
            )}
          </div>

          {!fromList && (
            <div>
              <div
                className="collapse jumbotron p-2"
                id="collapseExample"
                style={{
                  border: "1.5px solid black",
                  backgroundColor: "#fffff7",
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
