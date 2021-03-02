import React, { useState, useContext, useEffect } from "react";
import DamageRelations from "./DamageRelations";
import SearchCardPic from "./SearchCardPic";
import TypeBlock from "./TypeBlock";
import { setLatestSubmittedStringContext } from "../App";
import { setSearchCardLoadedContext } from "../App";
import { shinyContext } from "../App";

function PokeCard({
  pokemonData,
  pokemonTypes,
  typeData,
  imageLoaded,
  setImageLoaded,
  fromList,
  hidden,
  setHidden,
}) {
  const [listImageLoaded, setListImageLoaded] = useState(false);
  const [hover, setHover] = useState(false);

  const setLatestSubmittedString = useContext(setLatestSubmittedStringContext);
  const setSearchCardLoaded = useContext(setSearchCardLoadedContext);
  const shiny = useContext(shinyContext);

  const cardClicked = () => {
    if (fromList) {
      setLatestSubmittedString(pokemonData.name);
      setSearchCardLoaded(false);
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

  return (
    <div className="container mt-5 ">
      {pokemonData && (
        <div>
          <div className="row">
            <div
              className="col-auto mx-auto jumbotron p-3 mb-15"
              style={
                hover && fromList
                  ? {
                      border: "1px solid black",
                      borderRadius: "20px",
                      cursor: "pointer",
                      boxShadow: "inset 0 0 0 10px rgba(255,255,255, .4)",
                    }
                  : { border: "1px solid black", borderRadius: "20px" }
              }
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
                #{pokemonData.id} {pokemonData.name}
              </div>

              <div className="m-1">
                {pokemonTypes.map((t) => (
                  <TypeBlock type={t} key={t} />
                ))}
              </div>

              {/* <div className="m-1">
                {pokemonData.abilities.map((a) => (
                  <span>{a.ability.name + " "}</span>
                ))}
              </div> */}

              {!fromList && (
                <button
                  className="btn btn-secondary btn-sm"
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
                className="collapse jumbotron p-2"
                id="collapseExample"
                style={{ border: "1.5px solid black" }}
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
