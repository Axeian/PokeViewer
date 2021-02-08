import React, { useState } from "react";
import DamageRelations from "./DamageRelations";
import SearchCardPic from "./SearchCardPic";
import TypeBlock from "./TypeBlock";

function PokeCard({
  pokemonData,
  pokemonTypes,
  typeData,
  imageLoaded,
  setImageLoaded,
  fromList,
}) {
  const [listImageLoaded, setListImageLoaded] = useState(false);

  return (
    <div className="container mt-5 ">
      {pokemonData && (
        <div>
          <div className="row">
            <div
              className="col-auto mx-auto jumbotron p-3 mb-15"
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
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
